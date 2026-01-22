import styled from "styled-components";
import { media } from "../../styles/media";

export const Container = styled.div`
  width: min(980px, calc(100% - 48px));
  margin: 0 auto;

  @media ${media.sm} {
    width: min(980px, calc(100% - 32px));
  }
`;
