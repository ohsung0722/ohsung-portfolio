import styled from "styled-components";
import { DashedRing } from "./DashedRing.tsx";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type HeroSectionProps = {
  name: string;
  hello: string;
  roleTop: string;
  subtitle: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  avatarSrc: string;
};

export function HeroSection({
  name,
  roleTop,
  hello,
  subtitle,
  ctaLabel,
  avatarSrc,
}: HeroSectionProps) {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <Wrap>
      <GridBg aria-hidden />

      <Container>
        <Layout>
          <Content>
            <Kicker>{roleTop}</Kicker>

            <TitleBlock>
              <Hello>{hello}</Hello>
              <Name>
                <Accent>{firstName}</Accent>
                <Accent>{lastName}</Accent>
              </Name>
            </TitleBlock>

            <Subtitle>{subtitle}</Subtitle>

            <Actions>
              <CtaButton
                as="a"
                href="https://diamond-okapi-4ee.notion.site/17d71c4080a380668a83d469e40c93ff?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{ctaLabel}</span>
                <Arrow aria-hidden>›</Arrow>
              </CtaButton>

              <IconRow>
                <IconButton
                  href="https://github.com/ohsung0722"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </IconButton>
                <IconButton href="mailto:99doldol@gmail.com" aria-label="Gmail">
                  <MdEmail />
                </IconButton>
                <IconButton
                  href="https://instagram.com/five_star0722"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </IconButton>
              </IconRow>
            </Actions>
          </Content>

          <AvatarArea>
            <Ring>
              <DashedRing
                className="neonRing"
                strokeWidth={8}
                rotateDuration={90}
              />
              <AvatarFrame>
                <img src={avatarSrc} alt="profile" />
              </AvatarFrame>
            </Ring>

            {/* 가벼운 glow */}
            <Glow aria-hidden />
          </AvatarArea>
        </Layout>

        <Stats>
          <StatCard>
            <StatValue>28</StatValue>
            <StatLabel>Age</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>2</StatValue>
            <StatLabel>Projects Deployed</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>Sejong</StatValue>
            <StatLabel>University</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>Computer</StatValue>
            <StatLabel>Engineering</StatLabel>
          </StatCard>
        </Stats>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  padding: 56px 0 28px;
  min-height: 78vh;

  background: ${({ theme }) => `
    radial-gradient(
      1200px 700px at 50% 50%,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.04) 35%,
      transparent 55%
    ),
    linear-gradient(
      180deg,
      ${theme.colors.bg} 50%,
      ${theme.colors.bg} 100%
    )
  `};
`;

const GridBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.55;
  transform: translateZ(0);

  filter: blur(0.2px);
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  max-width: 1440px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: 0;
  padding-bottom: 0;

  @media (min-width: 1280px) {
    flex-direction: row;
    padding-top: 32px;
    padding-bottom: 96px;
  }
`;

const Content = styled.div`
  padding: 40px 0;

  @media (max-width: 960px) {
    padding: 28px 0 12px;
  }
`;

const Kicker = styled.div`
  color: rgba(255, 255, 255, 0.85);
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  letter-spacing: 0.12em;
  text-transform: none;
  font-size: 16px;
  margin-bottom: 18px;
`;

const TitleBlock = styled.div`
  margin-bottom: 18px;
`;

const Hello = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(42px, 5vw, 64px);
  line-height: 1.02;
  letter-spacing: -0.04em;
  font-weight: 800;
`;

const Name = styled.h1`
  margin: 0;
  margin-top: 28px;
  font-size: clamp(58px, 6vw, 92px);
  line-height: 0.98;
  letter-spacing: -0.05em;
  font-weight: 900;
`;

const Accent = styled.span`
  display: block;
  color: #00ffa3;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  margin: 44px 0 0;
  max-width: 520px;

  color: rgba(255, 255, 255, 0.72);
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 14px;
  line-height: 1.9;
`;

const Actions = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
`;

const CtaButton = styled.button`
  appearance: none;
  border: 1px solid rgba(0, 255, 163, 0.55);
  background: rgba(0, 255, 163, 0.08);
  color: rgba(0, 255, 163, 0.95);
  padding: 12px 18px;
  border-radius: 999px;

  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-size: 13px;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  transition:
    transform 0.15s ease,
    background 0.15s ease,
    border 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(0, 255, 163, 0.12);
    border-color: rgba(0, 255, 163, 0.85);
    text-decoration: none;
  }

  &:active {
    transform: translateY(0px);
  }
`;

const Arrow = styled.span`
  font-size: 18px;
  line-height: 1;
  transform: translateY(-1px);
`;

const IconRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 255, 163, 0.35);

  color: rgba(0, 255, 163, 0.9);

  cursor: pointer;
  text-decoration: none;

  transition:
    transform 0.15s ease,
    border 0.15s ease,
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 255, 163, 0.65);
    background: rgba(0, 0, 0, 0.35);
    color: #00ffa3;
  }

  &:active {
    transform: translateY(0px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const AvatarArea = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 420px;

  @media (max-width: 960px) {
    min-height: 340px;
  }
`;

const Ring = styled.div`
  position: relative;
  width: min(520px, 84vw);
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;

  .neonRing {
    position: absolute;
    inset: 0; /* 링을 바깥으로 살짝 키우기 (이미지처럼) */
    pointer-events: none;

    transform: scale(1.08); /* ✅ 여기 */
    transform-origin: center;
  }
`;

const AvatarFrame = styled.div`
  width: 92%;
  aspect-ratio: 1/1;
  border-radius: 999px;
  overflow: hidden;
  position: relative;

  /* 이미지처럼 "검은 베젤 + 얇은 라인" */
  box-shadow:
    0 0 0 10px rgba(0, 0, 0, 0.55),
    /* 두꺼운 검은 베젤 */ 0 0 0 11px rgba(0, 255, 163, 0.08); /* 아주 얇은 그린 라인 */

  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 999px;
  background: radial-gradient(
    closest-side,
    rgba(0, 255, 163, 0.12),
    transparent 62%
  );
  filter: blur(2px);
  pointer-events: none;
`;

const Stats = styled.div`
  margin-top: 26px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  padding: 18px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const StatValue = styled.div`
  font-size: 56px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: rgba(255, 255, 255, 0.96);

  @media (max-width: 960px) {
    font-size: 44px;
  }
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 13px;
  line-height: 1.3;
`;
