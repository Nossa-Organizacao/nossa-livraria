import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 3rem;
  gap: 15px;
  border-radius: 5px;
  margin: 3rem 0rem;
  background-color: var(--color-white);

  h2 {
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    label {
      font-weight: 500;
    }

    input {
      padding: 1rem;
      border: 1px solid var(--color-grey-scale-6);
      width: 100%;
      border-radius: 5px;
    }

    a {
      color: var(--color-grey-grey-2);
      align-self: flex-end;
      font-size: 0.8rem;
      /* padding: 1rem 0; */
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }

    .buttons > button {
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
  }

  // Tem que resolve
  /* input:focus {
    border: 1px solid var(--color-brand-brand-1);
  } */
`;
