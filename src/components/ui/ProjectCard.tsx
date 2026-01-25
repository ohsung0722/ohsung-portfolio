import React from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiJavascript,
  SiD3Dotjs,
  SiReactquery,
  SiYarn,
  SiStyledcomponents,
  SiOpenai,
  SiRecoil,
  SiSass,
  SiAxios,
  SiMui,
} from "react-icons/si";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { SiPostgresql, SiExpress } from "react-icons/si";
import { BsBox } from "react-icons/bs";

export type TechKey =
  | "next"
  | "ts"
  | "tailwind"
  | "aws"
  | "js"
  | "d3"
  | "reactQuery"
  | "styled"
  | "react"
  | "yarn"
  | "docker"
  | "node"
  | "express"
  | "sass"
  | "axios"
  | "mui"
  | "openai"
  | "recoil"
  | "zustand"
  | "postgres";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  href: string; // ✅ Github 링크 등
  ctaLabel?: string; // ✅ "Github"
  tech: TechKey[];

  // ✅ 모달에서 더 보여주고 싶으면 확장
  detailTitle?: string;
  detailDescription?: string;
  detailImages?: string[];
  devlogHref?: string; // ✅ 개발일지 링크
  devlogLabel?: string;
};

const TECH_META: Record<
  TechKey,
  { label: string; Icon: React.ComponentType<{ size?: number }> }
> = {
  next: { label: "Next.js", Icon: SiNextdotjs },
  ts: { label: "TypeScript", Icon: SiTypescript },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss },
  docker: { label: "Docker", Icon: SiDocker },
  node: { label: "Node.js", Icon: FaNodeJs },
  express: { label: "Express", Icon: SiExpress },
  postgres: { label: "PostgreSQL", Icon: SiPostgresql },
  react: { label: "React", Icon: FaReact },
  js: { label: "JavaScript", Icon: SiJavascript },
  d3: { label: "D3.js", Icon: SiD3Dotjs },
  reactQuery: { label: "React Query", Icon: SiReactquery },
  aws: { label: "AWS", Icon: FaAws },
  yarn: { label: "Yarn Berry", Icon: SiYarn },
  styled: { label: "styled-components", Icon: SiStyledcomponents },
  openai: { label: "ChatGPT / OpenAI", Icon: SiOpenai },
  recoil: { label: "Recoil", Icon: SiRecoil },
  zustand: { label: "Zustand", Icon: BsBox },
  sass: { label: "Sass / SCSS", Icon: SiSass },
  axios: { label: "Axios", Icon: SiAxios },
  mui: { label: "MUI", Icon: SiMui },
};

export function ProjectCard({
  title,
  description,
  image,
  href,
  ctaLabel = "Github",
  tech,
  detailTitle,
  devlogHref,
  devlogLabel = "개발일지",
  detailDescription,
  detailImages = [],
}: ProjectCardProps) {
  const [open, setOpen] = React.useState(false);

  const images = React.useMemo(() => {
    const list = [image, ...detailImages].filter(
      (v, i, arr) => arr.indexOf(v) === i,
    );
    return list;
  }, [detailImages, image]);

  const [imgIndex, setImgIndex] = React.useState(0);

  React.useEffect(() => {
    if (open) setImgIndex(0);
  }, [open]);

  const hasMany = images.length > 1;

  const goPrev = React.useCallback(() => {
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = React.useCallback(() => {
    setImgIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (!hasMany) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, hasMany, goPrev, goNext]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx);
    y.set(dy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <CardWrap>
        <Card
          role="button"
          tabIndex={0}
          aria-label={`${title} details`}
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          }}
        >
          <Top>
            <Thumb>
              <img src={image} alt={title} />
            </Thumb>
          </Top>

          <Body>
            <Title>{title}</Title>
            <Desc>{description}</Desc>

            <BottomRow>
              <TechRow aria-label="Tech stack">
                {tech.map((key) => {
                  const meta = TECH_META[key];
                  if (!meta) return null;
                  const { Icon, label } = meta;

                  return (
                    <TechPill key={key} title={label} aria-label={label}>
                      <Icon size={16} />
                    </TechPill>
                  );
                })}
              </TechRow>

              <CtaGroup onClick={(e) => e.stopPropagation()}>
                {devlogHref && (
                  <CtaLink
                    href={devlogHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} devlog link`}
                  >
                    <CtaText>{devlogLabel}</CtaText>
                    <CtaArrow aria-hidden>↗</CtaArrow>
                  </CtaLink>
                )}

                <CtaLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} github link`}
                >
                  <CtaText>{ctaLabel}</CtaText>
                  <CtaArrow aria-hidden>↗</CtaArrow>
                </CtaLink>
              </CtaGroup>
            </BottomRow>
          </Body>
        </Card>
      </CardWrap>

      {/* ✅ 모달 */}
      <AnimatePresence>
        {open && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <Modal
              as={motion.div}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${title} detail modal`}
            >
              <ModalTop>
                <ModalTitle>{detailTitle ?? title}</ModalTitle>
                <CloseBtn type="button" onClick={() => setOpen(false)}>
                  ✕
                </CloseBtn>
              </ModalTop>

              <ModalBody>
                <Carousel>
                  <CarouselViewport>
                    <AnimatePresence mode="wait">
                      <CarouselImgWrap
                        key={`${images[imgIndex]}-${imgIndex}`}
                        as={motion.div}
                        initial={{ opacity: 0, x: 18, scale: 0.995 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -18, scale: 0.995 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <CarouselImage
                          src={images[imgIndex]}
                          alt={`${title}-${imgIndex + 1}`}
                        />
                      </CarouselImgWrap>
                    </AnimatePresence>

                    {hasMany && (
                      <>
                        <NavBtn
                          type="button"
                          aria-label="Previous image"
                          $side="left"
                          onClick={goPrev}
                        >
                          ‹
                        </NavBtn>
                        <NavBtn
                          type="button"
                          aria-label="Next image"
                          $side="right"
                          onClick={goNext}
                        >
                          ›
                        </NavBtn>
                      </>
                    )}
                  </CarouselViewport>

                  {hasMany && (
                    <Dots aria-label="Image indicators">
                      {images.map((_, i) => (
                        <Dot
                          key={i}
                          type="button"
                          aria-label={`Go to image ${i + 1}`}
                          aria-current={i === imgIndex}
                          $active={i === imgIndex}
                          onClick={() => setImgIndex(i)}
                        />
                      ))}
                    </Dots>
                  )}
                </Carousel>

                <ModalDesc>{detailDescription ?? description}</ModalDesc>

                <ModalTech>
                  {tech.map((key) => {
                    const meta = TECH_META[key];
                    if (!meta) return null;
                    const { Icon, label } = meta;
                    return (
                      <ModalTechItem key={key}>
                        <Icon size={16} />
                        <span>{label}</span>
                      </ModalTechItem>
                    );
                  })}
                </ModalTech>

                <ModalActions>
                  <ModalActionRow>
                    {devlogHref && (
                      <ModalLink
                        href={devlogHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {devlogLabel} ↗
                      </ModalLink>
                    )}

                    <ModalLink
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ctaLabel} ↗
                    </ModalLink>
                  </ModalActionRow>
                </ModalActions>
              </ModalBody>
            </Modal>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}

/* styles */
const ModalActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

const CtaGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;
`;

const CardWrap = styled.div`
  perspective: 1200px;
`;

const Carousel = styled.div`
  display: grid;
  gap: 10px;
`;

const CarouselViewport = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  height: min(420px, 45vh);
  width: 100%;

  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.35);
`;

const CarouselImgWrap = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

const CarouselImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: contain;
  object-position: center;
  display: block;
`;

const NavBtn = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.$side === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);

  width: 40px;
  height: 40px;
  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.45);
  color: rgba(255, 255, 255, 0.92);

  cursor: pointer;
  display: grid;
  place-items: center;

  backdrop-filter: blur(6px);

  transition:
    transform 0.15s ease,
    border 0.15s ease,
    background 0.15s ease;

  &:hover {
    border-color: rgba(0, 255, 163, 0.35);
    background: rgba(0, 0, 0, 0.58);
    transform: translateY(-50%) scale(1.03);
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-bottom: 2px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${(p) => (p.$active ? "18px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: 0;
  cursor: pointer;

  background: ${(p) =>
    p.$active ? "rgba(0, 255, 163, 0.85)" : "rgba(255, 255, 255, 0.25)"};

  transition:
    width 0.18s ease,
    background 0.18s ease;

  &:hover {
    background: ${(p) =>
      p.$active ? "rgba(0, 255, 163, 0.95)" : "rgba(255, 255, 255, 0.35)"};
  }
`;

const Card = styled(motion.div)`
  border-radius: 26px;
  overflow: hidden;
  cursor: pointer;

  background:
    radial-gradient(
      800px 460px at 20% 10%,
      rgba(0, 255, 163, 0.12),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.02)
    );

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.45),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);

  transform-style: preserve-3d;
  will-change: transform;

  &:hover {
    box-shadow:
      0 30px 85px rgba(0, 0, 0, 0.65),
      inset 0 0 0 1px rgba(0, 255, 163, 0.35);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 255, 163, 0.6);
    outline-offset: 4px;
  }
`;

const Top = styled.div`
  padding: 18px 18px 0;
  transform: translateZ(35px);
`;

const Thumb = styled.div`
  border-radius: 18px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.08);

  aspect-ratio: 16 / 9;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    object-position: center;
  }
`;

const Body = styled.div`
  padding: 20px 20px 18px;
  transform: translateZ(45px);
`;

const Title = styled.h3`
  margin: 4px 0 0;
  font-size: clamp(22px, 2.2vw, 34px);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.96);
`;

const Desc = styled.p`
  margin: 12px 0 0;
  font-family: ${({ theme }) => theme.typography.mono};
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.75;
  font-size: 15px;
  max-width: 56ch;
`;

const BottomRow = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 14px;
`;

const TechRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const TechPill = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);

  color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);

  transition:
    transform 0.15s ease,
    border 0.15s ease,
    background 0.15s ease;

  ${Card}:hover & {
    transform: translateY(-2px);
    border-color: rgba(0, 255, 163, 0.35);
    background: rgba(0, 0, 0, 0.45);
  }
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  font-family: ${({ theme }) => theme.typography.mono};
  color: rgba(0, 255, 163, 0.95);
  letter-spacing: 0.08em;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: rgba(0, 255, 163, 1);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 255, 163, 0.6);
    outline-offset: 4px;
    border-radius: 10px;
  }
`;

const CtaText = styled.div`
  font-size: 16px;
  font-weight: 800;
`;

const CtaArrow = styled.span`
  font-size: 18px;
  transform: translateY(-1px);
`;

/* ---------- Modal ---------- */

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  padding: 18px;
`;

const Modal = styled(motion.div)`
  width: min(920px, calc(100vw - 32px));
  max-height: calc(100vh - 80px);
  border-radius: 22px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75));

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.75),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
`;

const ModalTop = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.95);
`;

const CloseBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.35);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 255, 163, 0.35);
  }
`;

const ModalBody = styled.div`
  padding: 22px;
  overflow-y: auto;
  overscroll-behavior: contain;

  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const ModalDesc = styled.p`
  margin: 14px 0 0;
  font-family: ${({ theme }) => theme.typography.mono};
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.8;
`;

const ModalTech = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ModalTechItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.12);

  color: rgba(255, 255, 255, 0.86);
  font-family: ${({ theme }) => theme.typography.mono};
  font-size: 13px;
`;

const ModalActions = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
`;

const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 12px 16px;
  border-radius: 999px;

  background: rgba(0, 255, 163, 0.12);
  border: 1px solid rgba(0, 255, 163, 0.35);

  font-family: ${({ theme }) => theme.typography.mono};
  color: rgba(0, 255, 163, 0.95);
  text-decoration: none;
  font-weight: 800;

  &:hover {
    background: rgba(0, 255, 163, 0.16);
    border-color: rgba(0, 255, 163, 0.55);
  }
`;
