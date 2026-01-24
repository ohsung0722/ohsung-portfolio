import React from "react";
import styled from "styled-components";

export type TimelineItem = {
  year: string;
  content: React.ReactNode[];
};

type Props = {
  items: TimelineItem[];
  stickyTop?: number;
};

export function ActivityTimeline({ items, stickyTop = 120 }: Props) {
  const sectionRefs = React.useRef<Record<string, HTMLElement | null>>({});
  const lineRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const dotRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  const [activeYear, setActiveYear] = React.useState(items[0]?.year ?? "");
  const [progressByYear, setProgressByYear] = React.useState<
    Record<string, number>
  >(() => Object.fromEntries(items.map((it) => [it.year, 0])));

  React.useEffect(() => {
    const onScroll = () => {
      /* -----------------------------
       * 1️⃣ activeYear 결정
       * ----------------------------- */
      let nextActive: string | null = null;

      for (const it of items) {
        const el = sectionRefs.current[it.year];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const inStickyRange =
          rect.top <= stickyTop && rect.bottom > stickyTop + 20;

        if (inStickyRange) {
          nextActive = it.year;
          break;
        }
      }

      if (!nextActive) {
        let bestYear = items[0]?.year ?? "";
        let bestDist = Infinity;

        for (const it of items) {
          const el = sectionRefs.current[it.year];
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          const dist = Math.abs(
            rect.top + rect.height / 2 - window.innerHeight / 2,
          );

          if (dist < bestDist) {
            bestDist = dist;
            bestYear = it.year;
          }
        }

        nextActive = bestYear;
      }

      if (nextActive !== activeYear) {
        setActiveYear(nextActive);
      }

      /* -----------------------------
       * 2️⃣ Line progress (Dot 기준)
       * ----------------------------- */
      setProgressByYear((prev) => {
        const next = { ...prev };

        for (const it of items) {
          const lineEl = lineRefs.current[it.year];
          const dotEl = dotRefs.current[it.year];
          if (!lineEl || !dotEl) continue;

          const lineRect = lineEl.getBoundingClientRect();
          const dotRect = dotEl.getBoundingClientRect();

          const dotCenterY = dotRect.top + dotRect.height / 2;
          const raw = (dotCenterY - lineRect.top) / lineRect.height;

          next[it.year] = clamp01(raw);
        }

        return next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items, stickyTop, activeYear]);

  return (
    <Wrap>
      {items.map((it) => {
        const isActive = it.year === activeYear;
        const progress = progressByYear[it.year] ?? 0;

        return (
          <Section
            key={it.year}
            ref={(el) => {
              sectionRefs.current[it.year] = el;
            }}
          >
            <Grid>
              <Left>
                <Line
                  ref={(el) => {
                    lineRefs.current[it.year] = el;
                  }}
                >
                  <LineFill
                    style={{
                      height: `${progress * 100}%`,
                      opacity: isActive ? 1 : 0.25,
                    }}
                  />
                </Line>

                <YearSticky $top={stickyTop}>
                  <Dot
                    ref={(el) => {
                      dotRefs.current[it.year] = el;
                    }}
                    $active={isActive}
                  />
                  <Year $active={isActive}>{it.year}</Year>
                </YearSticky>
              </Left>

              <Right>
                <ContentList>
                  {it.content.map((node, idx) => (
                    <ContentItem key={`${it.year}-${idx}`}>{node}</ContentItem>
                  ))}
                </ContentList>
              </Right>
            </Grid>
          </Section>
        );
      })}
    </Wrap>
  );
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

/* ======================
 * styles
 * ====================== */

const Wrap = styled.div`
  padding: 20px 0;
`;

const Section = styled.section`
  padding: 90px 0;
`;

const Grid = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;

  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 44px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  position: relative;
  min-height: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const YearSticky = styled.div<{ $top: number }>`
  position: sticky;
  top: ${(p) => p.$top}px;

  display: flex;
  align-items: center;
  gap: 18px;
`;

const Year = styled.div<{ $active: boolean }>`
  font-size: 64px;
  font-weight: 900;
  letter-spacing: -0.03em;

  color: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.3)"};

  text-shadow: ${({ $active }) =>
    $active ? "0 0 22px rgba(0,255,163,.25)" : "none"};

  transition:
    color 220ms ease,
    text-shadow 220ms ease;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.6);
  border: 2px solid
    ${({ $active }) =>
      $active ? "rgba(0,255,163,.6)" : "rgba(255,255,255,.25)"};

  box-shadow: ${({ $active }) =>
    $active ? "0 0 24px rgba(0,255,163,.25)" : "0 10px 22px rgba(0,0,0,.35)"};

  transition:
    border-color 220ms ease,
    box-shadow 220ms ease;
`;

const Line = styled.div`
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  width: 2px;

  background: rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  overflow: hidden;
`;

const LineFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  background: linear-gradient(
    180deg,
    rgba(0, 255, 163, 0.85),
    rgba(0, 255, 163, 0.3)
  );

  transition:
    height 120ms linear,
    opacity 200ms ease;
`;

const Right = styled.div`
  min-width: 0;
`;

const ContentList = styled.div`
  display: grid;
  gap: 56px;
`;

const ContentItem = styled.div`
  scroll-margin-top: 160px;

  &:not(:last-child) {
    padding-bottom: 56px;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
  }
`;
