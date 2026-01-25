import styled from "styled-components";
import { ProjectCard, type TechKey } from "./ProjectCard";

// ✅ Images (alias @ 사용)
import ssocDetail2Img from "@/assets/images/ssoc_detail_2.png";
import ssocImg from "@/assets/images/ssoc.png";
import ssocDetail3Img from "@/assets/images/ssoc_detail_3.png";
import ssocDetail4Img from "@/assets/images/ssoc_detail_4.png";
import ssocDetail5Img from "@/assets/images/ssoc_detail_5.png";
import ssocDetail1Img from "@/assets/images/ssoc_detail_1.png";

import bmkpImg from "@/assets/images/bmkp.png";
import bmkpDetail1Img from "@/assets/images/bmkp_detail_1.png";
import bmkpDetail2Img from "@/assets/images/bmkp_detail_2.png";

import morpheusImg from "@/assets/images/Morpheus.png";
import morpheusDetail1Img from "@/assets/images/morpheus_detail_1.png";
import morpheusDetail2Img from "@/assets/images/morpheus_detail_2.png";
import morpheusDetail3Img from "@/assets/images/morpheus_detail_3.png";
import morpheusDetail4Img from "@/assets/images/morpheus_detail_4.png";
import morpheusDetail5Img from "@/assets/images/morpheus_detail_5.png";

import fakeCallImg from "@/assets/images/fakeCall.jpeg";
import fakeCallDetail1Img from "@/assets/images/fakeCall_detail_1.jpeg";
import fakeCallDetail2Img from "@/assets/images/fakeCall_detail_2.jpeg";
import fakeCallDetail3Img from "@/assets/images/fakeCall_detail_3.jpeg";
import fakeCallDetail4Img from "@/assets/images/fakeCall_detail_4.jpeg";

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel?: string;
  tech: TechKey[];
  detailDescription?: string;
  detailImages?: string[];
  devLogHref?: string;
};

const PROJECTS: Project[] = [
  {
    title: "SSOC",
    description:
      "동아리 관리자와 학생들을 위한 세종대학교 공식 동아리 지원 통합 관리 플랫폼",
    image: ssocDetail2Img,
    href: "https://github.com/Recruiting-Your-Club/ryc",
    ctaLabel: "Github",
    tech: ["react", "aws", "ts", "styled", "reactQuery", "yarn"],
    detailDescription:
      "세종대학교 동아리 관리자와 학생들을 위한 공식 동아리 지원 통합 관리 플랫폼으로, 기획·디자인·개발·홍보·사용자 유치까지 엔드 투 엔드로 책임지고 진행한 프로젝트입니다. 특히 모놀리식 아키텍처에서 모노레포 기반 구조로 전환하며 겪은 기술적 고민과 해결 과정 등 모든 개발 과정을 아래 개발 일지에 정리해 두었습니다.",
    detailImages: [
      ssocImg,
      ssocDetail3Img,
      ssocDetail4Img,
      ssocDetail5Img,
      ssocDetail1Img,
    ],
    devLogHref:
      "https://diamond-okapi-4ee.notion.site/SSOC-28471c4080a380ff8028c5d3ec448661?source=copy_link",
  },
  {
    title: "BMKP",
    description:
      "데이터 시각화를 통한 논문 간의 연관 관계 분석 사이트 - 1인 외주",
    detailDescription:
      "해외 유명 대학의 논문 연구에 활용되는 데이터 시각화 기반 연관 관계 분석 사이트로, PM·디자이너와 협업하며 단독 프론트엔드 개발자로 참여했습니다. 서버 없이 모든 데이터 처리와 시각화 로직을 프론트엔드에서 설계·구현했으며, 지속적인 QA와 피드백 반영을 통해 완성도를 높여 클라이언트 만족과 함께 프로젝트를 종료했습니다.",
    image: bmkpImg,
    detailImages: [bmkpDetail1Img, bmkpDetail2Img],
    href: "https://github.com/ohsung0722/bmkp",
    ctaLabel: "Github",
    tech: ["js", "react", "d3", "tailwind", "aws"],
  },
  {
    title: "Morpheus",
    description: "어린이를 위한 AI 기반의 동화 제작 프로그램",
    detailDescription:
      "Imagine Cup 출품작으로, AI를 활용한 동화 자동 생성 서비스입니다. DALL·E 3 모델을 기반으로 프롬프트 엔지니어링을 적용해 동화 텍스트와 삽화를 생성했으며, 페이지 넘김, 레이아웃 구성 등 SCSS를 활용해 실제 동화책 경험을 반영한 UI/UX 설계를 통해 사용자 몰입도를 높였습니다.",
    image: morpheusImg,
    detailImages: [
      morpheusDetail1Img,
      morpheusDetail2Img,
      morpheusDetail3Img,
      morpheusDetail4Img,
      morpheusDetail5Img,
    ],
    href: "https://github.com/ohsung0722/EN-Morpheus-FE",
    ctaLabel: "Github",
    tech: ["js", "react", "axios", "tailwind", "sass", "mui"],
  },
  {
    title: "FakeCall",
    description: "가짜 전화 어플리케이션",
    detailDescription:
      "FakeCall은 React Native 기반의 가짜 전화 애플리케이션입니다. 단순한 UI 구현을 넘어, 오디오 재생·녹음·로컬 저장·시나리오 기반 호출 등 실제 전화 앱과 유사한 사용자 경험(UX)을 구현하는 것을 목표로 개발했습니다.",
    image: fakeCallImg,
    detailImages: [
      fakeCallDetail1Img,
      fakeCallDetail2Img,
      fakeCallDetail4Img,
      fakeCallDetail3Img,
    ],
    href: "https://github.com/ohsung0722/fakeCall",
    ctaLabel: "Github",
    tech: ["js"],
    devLogHref:
      "https://diamond-okapi-4ee.notion.site/FakeCall-2f271c4080a3808d8985c8bff1a820bd?source=copy_link",
  },
];

export function ProjectSection() {
  return (
    <Section>
      <Header>
        <Eyebrow>PROJECTS</Eyebrow>
        <H2>Project Card</H2>
        <P>카드 클릭 시 프로젝트 세부 설명을 확인할 수 있습니다.</P>
      </Header>

      <Grid>
        {PROJECTS.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            image={p.image}
            href={p.href}
            ctaLabel={p.ctaLabel}
            tech={p.tech}
            detailDescription={p.detailDescription}
            detailImages={p.detailImages}
            devlogHref={p.devLogHref}
          />
        ))}
      </Grid>
    </Section>
  );
}

/* styles */

const Section = styled.section`
  padding: 84px 0 96px;
`;

const Header = styled.div`
  width: min(1440px, calc(100% - 48px));
  margin: 0 auto 28px;

  @media (max-width: 640px) {
    width: min(1440px, calc(100% - 32px));
  }
`;

const Eyebrow = styled.div`
  color: rgba(0, 255, 163, 0.9);
  font-family: ${({ theme }) => theme.typography.mono};
  letter-spacing: 0.14em;
  font-size: 12px;
  margin-bottom: 10px;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: clamp(26px, 3.2vw, 44px);
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.96);
`;

const P = styled.p`
  margin: 10px 0 0;
  max-width: 720px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  font-family: ${({ theme }) => theme.typography.mono};
`;

const Grid = styled.div`
  width: min(1440px, calc(100% - 48px));
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 22px;

  @media (max-width: 1100px) {
    gap: 18px;
  }

  /* 2열 */
  & > * {
    grid-column: span 6;
  }

  @media (max-width: 980px) {
    & > * {
      grid-column: span 12;
    }
  }

  @media (max-width: 640px) {
    width: min(1440px, calc(100% - 32px));
  }
`;
