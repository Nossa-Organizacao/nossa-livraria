import { styled } from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: var(--color-brown-03);

  /* position: absolute;
  top: 0; */

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: 10px;
    width: 100%;

    section {
      display: flex;
      gap: 10px;
    }

    span {
      color: var(--color-white);
    }

    img {
      height: 70px;
      width: 130px;
    }

    form {
      display: flex;
      border-radius: 15px;
      background-color: var(--color-white);
      border: none;
      padding: 5px;

      input {
        font-size: var(--font-body-1);
        margin-left: 15px;
        border: none;
        border-radius: 15px 0px 0px 15px;
      }

      button {
        margin-inline: 10px;
        border: none;
        background-color: var(--color-white);
        color: var(--color-brown-03);
        font-size: 25px;
        border-radius: 0px 15px 15px 0px;
        cursor: pointer;
      }
      button:hover {
        color: var(--color-green-01);
      }
    }
  }
`;

export { HeaderStyle };
