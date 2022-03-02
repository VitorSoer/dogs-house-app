import styled, { css } from "styled-components";

export const ButtonComponent = styled.button`
  background-color: var(--purple);
  color: var(--white);
  font-size: 1.75rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 30rem;
  height: 5rem;
  transition: all 0.5s;

  ${(props) =>
    props.active &&
    css`
      background: #1a1b21;
      color: var(--gelid-white);

      &&:hover {
        box-shadow: 5px 5px var(--purple);
      }

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }
    `}

  ${(props) =>
    props.apadrinhe &&
    css`
      background: var(--blue);
      color: white;

      &&:hover {
        box-shadow: none;
      }
    `}
  
  ${(props) =>
    props.ajude &&
    css`
      background: var(--green);
      color: white;

      &&:hover {
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.adote &&
    css`
      background: var(--red);
      color: white;

      &&:hover {
        box-shadow: none;
      }
    `}

  :hover {
    filter: brightness(125%);
    box-shadow: 5px 5px var(--light-blue);
  }
`;
