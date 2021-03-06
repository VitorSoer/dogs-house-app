import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 5rem;
  margin: 0 auto 10rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media only screen and (max-width: 1280px) {
    row-gap: 5rem;
  }
`;
