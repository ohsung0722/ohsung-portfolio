import React from "react";
import avatar from "../assets/avatar.jpeg";
import { HeroSection } from "../components/ui/HeroSection";
import { IntroTransition } from "../components/ui/IntroTransition";
import { ProjectSection } from "../components/ui/ProjectSection";
import ActivitySection from "../components/ui/ActivitySection";

export function HomePage() {
  const [introState, setIntroState] = React.useState<
    "idle" | "covering" | "uncovering" | "done"
  >("idle");
  const handleCoverStart = React.useCallback(
    () => setIntroState("covering"),
    [],
  );
  const handleUncoverStart = React.useCallback(
    () => setIntroState("uncovering"),
    [],
  );
  const handleDone = React.useCallback(() => setIntroState("done"), []);
  return (
    <>
      {introState !== "idle" && (
        <div
          style={{
            opacity:
              introState === "uncovering" || introState === "done" ? 1 : 0,
          }}
        >
          <HeroSection
            name="프론트엔드 개발자 권오성입니다."
            hello="어제보다 더 성장하고 싶은"
            roleTop="FrontEnd Developer"
            subtitle="개발 실력과 소통 능력을 모두 갖춘 ‘누구나 함께 일하고 싶은 개발자’가 되기 위해 노력하고 있습니다. | 
            성능 최적화와 클린 코드에 대해 고민하고, 다양한 매체와 기술 블로그를 통해 프로젝트에 적용하는 과정을 즐깁니다."
            avatarSrc={avatar}
            ctaLabel="VIEW MORE DETAIL PDF"
            onCtaClick={() => {
              console.log("CTA clicked");
            }}
          />
          <ProjectSection />
          <ActivitySection />
        </div>
      )}

      {/* Intro는 idle / covering 동안만 존재 */}
      {introState !== "done" && (
        <IntroTransition
          onCoverStart={handleCoverStart}
          onUncoverStart={handleUncoverStart}
          onDone={handleDone}
        />
      )}

      {/* 다음 섹션들... */}
    </>
  );
}
