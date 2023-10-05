import { styled } from "styled-components";

const WorkBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-brown-03);
  border-bottom: 1px solid var(--color-brown-03);
  padding: 0.4rem;
  
  div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    transition:0.3s;
    background-color: rgba(255, 232, 214, 0.5);
    border-radius: 4px;
  }
`;

export { WorkBox };
