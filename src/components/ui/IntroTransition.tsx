import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

type IntroTransitionProps = {
  onDone: () => void;
  onCoverStart: () => void;
  onUncoverStart: () => void;
  lines?: string[];
  panelCount?: number;
};

function useTypewriter(lines: string[], speed = 42, linePause = 520) {
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [typed, setTyped] = React.useState<string[]>(() => lines.map(() => ""));
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (done) return;

    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const current = lines[lineIndex] ?? "";
    if (charIndex < current.length) {
      const t = window.setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];
          next[lineIndex] = current.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, linePause);
    return () => window.clearTimeout(t);
  }, [lines, lineIndex, charIndex, speed, linePause, done]);

  return { typed, done };
}

export function IntroTransition({
  onDone,
  onCoverStart,
  onUncoverStart,
  lines = [
    "안녕하세요",
    "어제보다 오늘 더 성장하고 싶은 개발자",
    "권오성입니다",
  ],
  panelCount = 7,
}: IntroTransitionProps) {
  const { typed, done: typingDone } = useTypewriter(lines, 42, 520);
  const [phase, setPhase] = React.useState<"typing" | "cover" | "uncover">(
    "typing",
  );
  const coverStartedRef = React.useRef(false);
  const uncoverNotifiedRef = React.useRef(false);

  React.useEffect(() => {
    if (!typingDone) return;

    const t1 = setTimeout(() => {
      setPhase("cover");
    }, 100);

    const t2 = setTimeout(() => {
      setPhase("uncover");
      if (!uncoverNotifiedRef.current) {
        uncoverNotifiedRef.current = true;
        onUncoverStart();
      }
    }, 1550);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [typingDone, onUncoverStart]);

  const panels = Array.from({ length: panelCount });

  return (
    <Overlay>
      {/* 텍스트는 uncover 시작하면 살짝 페이드아웃 */}
      <CenterText
        as={motion.div}
        initial={{ opacity: 0, y: 8 }}
        animate={
          phase === "uncover" ? { opacity: 0, y: -6 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Line>{typed[0]}</Line>
        <LineMuted>{typed[1]}</LineMuted>
        <LineAccent>{typed[2]}</LineAccent>
        {phase === "typing" && <Caret aria-hidden />}
      </CenterText>

      <Panels aria-hidden $count={panelCount}>
        {panels.map((_, i) => {
          const delay = i * 0.08;

          const isCover = phase === "cover";
          const isUncover = phase === "uncover";

          return (
            <Panel
              key={i}
              as={motion.div}
              initial={{ y: "100%" }}
              animate={
                isCover
                  ? { y: "0%" }
                  : isUncover
                    ? { y: "100%" }
                    : { y: "100%" }
              }
              transition={{
                duration: 0.6,
                ease: [0.2, 0.8, 0.2, 1],
                delay,
              }}
              onAnimationStart={() => {
                if (isCover && i === 0 && !coverStartedRef.current) {
                  coverStartedRef.current = true;
                  onCoverStart();
                }
              }}
              onAnimationComplete={() => {
                if (isUncover && i === panelCount - 1) onDone();
              }}
            />
          );
        })}
      </Panels>
    </Overlay>
  );
}

/* styles */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow: hidden;
  display: grid;
  place-items: center;

  /* 메인이 아래에서 보이게 하려면 Overlay 자체는 투명이어야 함 */
  background: transparent;
  pointer-events: none; /* 메인 클릭 막고 싶으면 여기서 조절 */
`;

const CenterText = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 24px;
  pointer-events: none;

  filter: drop-shadow(0 8px 30px rgba(0, 0, 0, 0.55));
`;

const Line = styled.div`
  font-size: clamp(38px, 4.2vw, 54px);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.95);
`;

const LineMuted = styled.div`
  margin-top: 14px;
  font-size: clamp(16px, 1.8vw, 22px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  font-family: ${({ theme }) => theme.typography.mono};
`;

const LineAccent = styled.div`
  margin-top: 16px;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: rgba(0, 255, 163, 0.95);
`;

const Caret = styled.span`
  display: inline-block;
  width: 10px;
  height: 28px;
  margin-left: 8px;
  border-radius: 999px;
  background: rgba(0, 255, 163, 0.9);
  animation: blink 0.9s steps(2, end) infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const Panels = styled.div<{ $count: number }>`
  position: absolute;
  inset: 0;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$count}, 1fr);
`;

const Panel = styled(motion.div)`
  /* ✅ 불투명에 가깝게: 메인을 완전히 덮었다가 걷힘 */
  background: rgba(6, 7, 19, 1); /* 네 bg 톤에 맞춰 */
  /* 약간의 결 + 라인 */
  box-shadow: inset 0 0 0 1px rgba(0, 255, 163, 0.06);
`;
