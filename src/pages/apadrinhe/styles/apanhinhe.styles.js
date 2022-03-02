import styled from "styled-components";

export const ApadrinheWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;

  border-radius: 10px;
  padding: 0 5rem;

  background: var(--black);
  margin: 2rem 0;
  height: 65rem;

  div {
    display: flex;
    flex-direction: column;
    width: 40%;

    h2 {
      font-size: 4.25rem;

      @media only screen and (max-width: 476px) {
        font-size: 3rem;
      }
    }

    span {
      color: var(--gelid-white);
      margin: 1rem 0 5rem;

      @media only screen and (max-width: 476px) {
        font-size: 1.75rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      background: var(--purple);
      color: var(--gelid-white);
      border-radius: 10px;

      width: 25rem;
      height: 5rem;

      :hover {
        filter: brightness(115%);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3.75rem;
    border-radius: 0;

    margin: 0 auto 2rem;

    div {
      width: 100%;
    }
    a {
      margin: 0 auto;
    }
  }
`;

export const ImageApadrinhe = styled.div`
  background-image: url("https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center;
  background-size: cover;

  min-height: 20rem;
  border-radius: 5px;

  height: 45rem;
  width: 45rem;
`;
