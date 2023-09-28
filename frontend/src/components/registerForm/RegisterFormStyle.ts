import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 3rem;
  gap: 18px;
  border-radius: 5px;
  margin: 3rem;
  background-color: var(--color-white);

  h2 {
    margin: 0 auto;
  }

  .field_register {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  .field_password {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 18px;
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
  }

  .registerbutton {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
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
`;
