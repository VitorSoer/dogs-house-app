import styled from "styled-components";

export const AdoteWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 7.5rem;
  flex-wrap: wrap;

  margin-bottom: 7.5rem;
  min-height: 80rem;
`;

export const CardStyle = styled.div`
  display: flex;

  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 7.5rem 1.75rem;
  cursor: pointer;
  height: 40rem;
  width: 30rem;

  @media only screen and (max-width: 1024px) {
    height: 45rem;
    width: 35rem;
    font-size: 2.25rem;
  }

  img {
    height: 75%;
    width: 100%;

    object-position: center;
    object-fit: cover;
    border-radius: 5px;
  }

  h1 {
    background: var(--purple);
    color: var(--gelid-white);

    width: 80%;
    justify-self: center;
    font-size: 3.5rem;
    border-radius: 10px;

    transform: translateY(-50%);

    @media only screen and (max-width: 1024px) {
      font-size: 4rem;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;

    align-items: center;
    justify-content: center;
    margin: -2rem auto 1.5rem auto;

    flex-wrap: wrap;

    span {
      display: flex;
      align-items: center;
      margin: 1rem 2rem;
      gap: 1rem;
      width: 100%;

      @media only screen and (max-width: 378px) {
        text-align: center;
        margin: 1rem 0;
      }
    }
  }
`;
export const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 5.5rem;
  width: 95%;

  background-color: var(--purple);
  color: var(--gelid-white);
  border-radius: 0 0 50px 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
  }

  label {
    @media only screen and (max-width: 535px) {
      display: none;
    }
  }

  input {
    border: 1px solid var(--purple);
    border-radius: 5px;
    height: 3rem;
    width: 30rem;
    margin: 0 1.5rem;
    text-align: center;

    :focus {
      outline: none;
    }

    @media only screen and (max-width: 324px) {
      width: 25rem;
    }
  }
`;
