import { styled } from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;

  height: auto;
  padding: 20px;

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

    nav {
      ol {
        display: flex;
        gap: 0.7rem;
        padding-top: 10px;

        li {
          padding: 0.3rem;
          border-radius: 15px;
          background-color: var(--color-branch-00);
          color: var(--color-brown-03);
          font-size:var(--font-body-1);
          font-weight: bold;
          border: 3px solid var(--color-brown-03);
        }

        li:hover {
          cursor: pointer;
          transition: 0.4s;
          border: 3px solid var(--color-branch-00);
          color: var(--color-brown-02);
        }
      }
    }
    section {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 165px;
      margin: auto;
      width: 100px;
      height: 50px;

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
  }
`;

export { HeaderStyle };
