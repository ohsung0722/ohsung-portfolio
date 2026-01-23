import styled from "styled-components";
import { media } from "../../styles/media";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  max-width: 1440px;

  @media ${media.sm} {
    padding: 0 16px;
  }
`;
