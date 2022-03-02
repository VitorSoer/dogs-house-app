import styled, { css } from "styled-components";

export const DivText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-transform: translateZ(0px);

  h1 {
    font-size: 2.75rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--light-blue);

    ${(props) =>
      props.ajude &&
      css`
        color: var(--green);
      `}

    ${(props) =>
      props.adote &&
      css`
        color: var(--red);
      `}
  }
`;

export const DivContent = styled.div`
  margin: 0 4rem;

  p {
    font-size: 1.4rem;
    padding-bottom: 0.5rem;
  }
`;
