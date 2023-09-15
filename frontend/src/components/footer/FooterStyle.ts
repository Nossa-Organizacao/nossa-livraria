import { styled } from "styled-components";

export const Main = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--color-grey-scale-0);
  color: var(--color-grey-scale-10);
  text-align: center;
  overflow: hidden;
  position: absolute;
  bottom: 0px;

  .arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--color-grey-scale-2);
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .arrow > svg {
    height: 100px;
    width: 100px;
  }

  & > a {
    padding: 1rem;
    background-color: var(--color-grey-scale-2);
    border-radius: 5px;
    color: var(--color-grey-grey-2);
    align-self: center;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
