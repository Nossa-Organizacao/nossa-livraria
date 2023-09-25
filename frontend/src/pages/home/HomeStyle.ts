import { styled } from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position:relative;
  gap:15px;

  background-color: var(--color-brown-00);
  /* width:100vw; */
  min-height: 100vh;
  height: 100%;
  padding-bottom: 100px;
`;

export { Main };
