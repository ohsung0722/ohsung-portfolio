import React from "react";
import styled from "styled-components";
import { ActivityTimeline, type TimelineItem } from "./ActivityTimeLine.tsx";
import { ImagePreviewModal } from "./ImagePreviewModal.tsx";

export default function ActivitySection() {
  const items: TimelineItem[] = [
    {
      year: "2023",
      content: [
        <ActivityContent
          title="First Half of 2023"
          description={
            <>
              컴퓨터공학과로 전과한 후, 세종대학교 중앙 IT 동아리 En#에 면접을
              통해 가입했습니다. <br /> 4월부터 6월까지 C#과 Java를 활용한 토이
              프로젝트를 각각 3~4개씩 진행하며, 기초 문법 이해를 넘어 객체지향
              설계, 디자인 패턴, 클린 코드에 대한 고민을 중심으로 짧은 기간 동안
              개발 역량을 집중적으로 향상시키는 데 주력했습니다. <br />
              또한, 모르는 개념과 기술에 대해 스스로 학습하고 해결하는 접근
              방식을 체득하며 개발자로서의 기초 체력과 문제 해결 역량을
              다졌습니다.
              <StudyLinkWrap>
                <StudyLink
                  href="https://diamond-okapi-4ee.notion.site/En-27e71c4080a38086b92ddc811d5936ea?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  스터디 일지 보러가기 ↗
                </StudyLink>
              </StudyLinkWrap>
            </>
          }
          images={[{ src: "/en.jpeg", alt: "2025 activity 1" }]}
          onImageClick={(img) => setPreview(img)}
        />,
        <ActivityContent
          title="Second Half of 2023"
          description={
            <>
              2023년 하반기에는 다양한 공모전에 참여하며, 개발자로서 직접 만든
              결과물을 여러 사람 앞에서 발표하는 경험을 쌓을 수 있었습니다.{" "}
              <br />
              과학기술정보통신부 주최의 전국 규모 해커톤 K-Hackathon에 참가해
              결선에 진출했으며, 유튜브 생중계 환경과 오프라인 현장에서 개발한
              서비스를 발표하고 장려상을 수상하는 성과를 거두었습니다. <br />{" "}
              또한 세종대학교 교내 IT 창업 컨퍼런스에 참가해 수상 경험을
              쌓았으며, 비록 입상에는 이르지 못했지만 Microsoft 주최 Imagine Cup
              출품을 목표로 팀원들과 함께 Morpheus라는 서비스를
              기획·개발했습니다.
              <br /> 이 과정에서 단순 개발을 넘어, 기획부터 사용자 유치, 실제
              사용자 피드백 반영까지 전 과정을 경험하며 협업 환경에서의 명확한
              커뮤니케이션과 역할 분담의 중요성을 깊이 체감할 수 있었습니다.
              <StudyLinkWrap>
                <StudyLink
                  href="https://www.youtube.com/live/yhsqJYY0a3w?si=hrj6q9fubzWfWGl0&t=2917"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  발표 영상 보러가기 ↗
                </StudyLink>
              </StudyLinkWrap>
            </>
          }
          images={[
            { src: "/2023_2.png", alt: "2025 activity 2" },
            { src: "/2023_3.jpeg", alt: "2025 activity 3" },
            { src: "/2023_1.jpeg", alt: "2025 activity 1" },
            { src: "/2023_4.jpeg", alt: "2025 activity 4" },
            { src: "/2023_5.jpeg", alt: "2025 activity 5" },
          ]}
          onImageClick={(img) => setPreview(img)}
        />,
      ],
    },
    {
      year: "2024",
      content: [
        <ActivityContent
          title="Community"
          description={
            <>
              2024년은 개발 역량뿐 아니라 리더십과 실무 경험의 폭을 확장한
              해였습니다. <br />
              <br />
              동아리 활동과 개발에 대한 꾸준한 참여를 인정받아, 세종대학교 중앙
              IT 동아리 En#의 회장을 맡아 활동했습니다. 동아리 내부 운영뿐만
              아니라 타 IT 동아리와의 연합 컨퍼런스, 개발자 컨퍼런스 등을
              주도적으로 기획·운영했으며, ‘채널톡’ 주최의 대학 IT 동아리 연합
              해커톤과 회장단 회의에 참여하며 다양한 배경을 가진 사람들과의
              협업과 <br />
              커뮤니케이션 역량을 키울 수 있었습니다.
            </>
          }
          images={[
            { src: "/2024_1.jpeg", alt: "2024 activity 1" },
            { src: "/2024_2.jpeg", alt: "2024 activity 1" },
            { src: "/2024_3.jpeg", alt: "2024 activity 1" },
            { src: "/2024_4.jpeg", alt: "2024 activity 1" },
          ]}
          onImageClick={(img) => setPreview(img)}
        />,
        <ActivityContent
          title="Development"
          description={
            <>
              졸업 과제인 캡스톤 디자인에서는 처음으로 Spring 기반 프로젝트를
              진행했습니다. JPAJoinMaestro라는 라이브러리를 개발하여, JPA 사용
              시 발생하는 성능 저하 문제를 커스텀 어노테이션 하나로 쿼리 성능을
              최적화할 수 있도록 설계했습니다. 이 과정에서 Spring, JPA, MySQL,
              쿼리 최적화 전반에 대해 깊이 있는 이해를 쌓을 수 있었습니다.
              <br />
              <br />
              또한, 첫 외주 프로젝트를 수행했습니다. 논문 연구를 위한 연관 검색
              사이트 BMKP를 1인 개발로 진행하며, 해외 클라이언트와 매주 정기
              미팅을 통해 요구사항을 조율하고 개발 진행 상황을 공유했습니다.
              최종 QA까지 책임지고 수행하며 프로젝트를 성공적으로 마무리했고,
              비록 1인 개발이었지만 PM·디자이너·클라이언트 등 다양한 역할과의
              협업과 커뮤니케이션을 직접 경험할 수 있었습니다.
            </>
          }
          images={[{ src: "/bmkp.png", alt: "2025 activity 1" }]}
          onImageClick={(img) => setPreview(img)}
        />,
      ],
    },
    {
      year: "2025",
      content: [
        <ActivityContent
          title="SSOC 실 서비스 개발"
          description={
            <>
              2025년에는 세종대학교 동아리 운영 환경을 개선해보자는 문제의식에서
              출발해, 같은 목표를 가진 동아리원들과 함께 **SSOC(Sejong Students
              Of Club)**라는 동아리원 모집 및 관리 플랫폼을 개발했습니다. <br />
              <br />
              기존 동아리 모집 과정이 SNS·구글 폼·개별 문의 등으로 분산되어
              비효율적이라는 점에 주목했고, 이를 하나의 통합된 플랫폼으로
              해결하고자 프로젝트를 기획했습니다.
              <br />
              <br />
              SSOC 프로젝트에서는 초기 기획 단계부터 디자인, 개발, 홍보, 사용자
              유치까지 전 과정을 엔드 투 엔드로 참여했습니다. 서비스 구조 설계,
              UI/UX 기획, 프론트엔드 개발을 중심으로 실제 동아리 운영진과 학생
              사용자들의 요구사항을 반복적으로 수집·반영하며 서비스를
              고도화했습니다.
              <br />
              <br />
              개발 과정에서는 초기 모놀리식 구조에서 출발해 서비스 확장성과 협업
              효율을 고려한 모노레포 아키텍처로 전환했으며, 실제 운영 환경을
              고려한 구조 개선과 기술적 의사결정을 경험했습니다. 이러한 고민과
              개선 과정은 개발 일지로 정리하여 지속적으로 공유했습니다.
              <br />
              <br />
              서비스 출시 이후에는 단순 배포에 그치지 않고, 실제 동아리를
              대상으로 한 홍보와 온보딩을 직접 진행하며 실사용자 기반을 확보하는
              데 집중했습니다. 그 결과 현재 SSOC는 세종대학교 총동아리연합회와
              연계된 공식 플랫폼으로 자리 잡았으며, 다수의 동아리가 실제 모집 및
              관리에 활용하고 있습니다.
              <br />
              <br />이 프로젝트를 통해 단순히 기능을 구현하는 개발을 넘어,
              문제를 정의하고, 사용자를 설득하며, 서비스가 실제로 사용되기까지의
              전 과정을 경험할 수 있었고, 기술과 기획, 커뮤니케이션을 함께
              고려하는 개발자로 한 단계 성장할 수 있었습니다.
              <StudyLinkWrap>
                <StudyLink
                  href="https://diamond-okapi-4ee.notion.site/SSOC-28471c4080a380ff8028c5d3ec448661?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개발 일지 보러가기 ↗
                </StudyLink>
              </StudyLinkWrap>
            </>
          }
          images={[
            { src: "/2025_1.jpg", alt: "2025 activity 1" },
            { src: "/2025_2.png", alt: "2025 activity 1" },
            { src: "/2025_3.png", alt: "2025 activity 1" },
            { src: "/2025_4.png", alt: "2025 activity 1" },
          ]}
          onImageClick={(img) => setPreview(img)}
        />,
      ],
    },
  ];

  const [preview, setPreview] = React.useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <Section id="activity">
      <Header>
        <H2>Activities</H2>
        <Sub>연도별 저의 주요 성과와 활동들입니다.</Sub>
      </Header>

      <ActivityTimeline items={items} stickyTop={140} />
      {preview && (
        <ImagePreviewModal
          src={preview.src}
          alt={preview.alt}
          onClose={() => setPreview(null)}
        />
      )}
    </Section>
  );
}

/* --------------------------
 * Right Content (정적)
 * -------------------------- */

type Img = { src: string; alt: string };

function ActivityContent({
  title,
  description,
  images,
  onImageClick,
}: {
  title: string;
  description: React.ReactNode;
  images: Img[];
  onImageClick: (img: Img) => void;
}) {
  return (
    <RightWrap>
      <TextBlock>
        <RightTitle>{title}</RightTitle>
        <RightDesc>{description}</RightDesc>
      </TextBlock>

      <Gallery>
        {images.map((img) => (
          <Shot
            key={img.src}
            role="button"
            tabIndex={0}
            onClick={() => onImageClick(img)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onImageClick(img);
            }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </Shot>
        ))}
      </Gallery>
    </RightWrap>
  );
}

/* styles */

const StudyLinkWrap = styled.div`
  margin-top: 16px;
`;

const StudyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 10px 14px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;

  color: rgba(0, 255, 163, 0.95);
  text-decoration: none;

  background: rgba(0, 255, 163, 0.12);
  border: 1px solid rgba(0, 255, 163, 0.35);

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(0, 255, 163, 0.18);
    border-color: rgba(0, 255, 163, 0.6);
    transform: translateY(-1px);
  }
`;

const Section = styled.section`
  padding: 120px 0;
`;

const Header = styled.div`
  width: min(1440px, calc(100% - 48px));
  margin: 0 auto 0;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: clamp(30px, 3.2vw, 44px);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.95);
`;

const Sub = styled.p`
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
`;

const RightWrap = styled.div`
  display: grid;
  gap: 18px;
`;

const TextBlock = styled.div`
  padding-top: 6px;
`;

const RightTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.92);
`;

const RightDesc = styled.p`
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.85;
  max-width: 70ch;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Shot = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);

  aspect-ratio: 16 / 9;
  cursor: zoom-in;

  &:hover img {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 100%;
    display: block;

    object-fit: contain;
    object-position: center;
    transition: transform 0.25s ease;
  }
`;
