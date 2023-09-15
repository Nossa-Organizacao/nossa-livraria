import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  /* padding-bottom: 950px; */
  background-color: var(--color-branch-00);

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    padding: 3rem;
    gap: 15px;
    border-radius: 5px;
    margin: 3rem 0;
    background-color: var(--color-white);
  }

  h2 {
    margin: 1rem 0;
  }

  span {
    margin: 1rem 0;
    font-weight: 500;
  }

  label {
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  input {
    padding: 1rem;
    border: 1px solid var(--color-grey-scale-6);
    width: 100%;
    border-radius: 5px;
  }

  // Tem que resolve
  /* input:focus {
    border: 1px solid var(--color-brand-brand-1);
  } */

  a {
    color: var(--color-grey-grey-2);
    align-self: flex-end;
    padding: 1rem 0;
  }

  /* a:hover {
    color: var(--color-brand-brand-1);
  } */

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    border: 2px solid transparent;
    color: var(--color-white);
    background-color: var(--color-grey-scale-2);
  }

  /* button:hover {
    border: solid 2px var(--color-grey-scale-grey-0);
  } */

  .buttons > a {
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    color: var(--color-white);
    background-color: var(--color-grey-scale-2);
    /* border: 2px solid var(--color-grey-scale-grey-3); */
  }

  /* .buttons > a:hover {
    border: solid 2px var(--color-grey-scale-grey-0);
  } */
`;

export { Main };
