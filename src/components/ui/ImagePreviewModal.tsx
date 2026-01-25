import React from "react";
import styled from "styled-components";

type Props = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export function ImagePreviewModal({ src, alt, onClose }: Props) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>✕</CloseBtn>

        <ImageFrame>
          <img src={src} alt={alt} />
        </ImageFrame>
      </Modal>
    </Overlay>
  );
}

/* styles */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);

  display: grid;
  place-items: center;
`;

const Modal = styled.div`
  position: relative;

  width: min(1200px, 92vw);
  max-height: calc(800px + 48px);

  padding: 24px;
  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.8);
`;

const ImageFrame = styled.div`
  width: 100%;
  height: min(80vh, 800px);

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);
  border-radius: 14px;

  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;

    width: auto;
    height: auto;

    object-fit: contain;
    display: block;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 36px;
  height: 36px;
  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.6);
  color: white;

  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: rgba(0, 0, 0, 0.85);
  }
`;
