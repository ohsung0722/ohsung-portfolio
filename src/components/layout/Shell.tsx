import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../ui/Container";

export function Shell() {
  return (
    <Root>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Root>
  );
}

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;
