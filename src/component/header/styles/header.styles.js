import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    border-radius: 0px;
  }

  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  background: #1a1b21;
  padding: 4.5rem 5rem;
  height: 90vh;
  width: 61%;

  @media only screen and (max-width: 600px) {
    align-items: center;
    padding: 4.5rem 3rem;
    text-align: center;
    width: 100%;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 600;
  }

  span {
    font-size: 1.75rem;
    background-color: var(--purple);
    color: var(--white);
    border: none;
    border-radius: 10px;

    padding: 1.25rem 10rem;

    :hover {
      cursor: pointer;
      filter: brightness(110%);
    }
  }

  animation: moveDown 1s ease-out;

  @keyframes moveDown {
    0% {
      opacity: 0;
      transform: translateY(-5rem);
    }
    60% {
      transform: translateY(0.25rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 35rem;

  font-size: 2.5rem;
  color: var(--gelid-white);

  p {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--light-blue);
  }

  @media only screen and (max-width: 768px) {
    font-size: 2.35rem;
    height: 45rem;
  }
`;

export const PhotoContainer = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(112, 39, 160, 0.6),
      rgba(112, 39, 160, 1)
    ),
    url("https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-position: center;
  background-size: cover;

  height: 90vh;
  width: 39%;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  animation: moveUp 1s ease-out;

  @keyframes moveUp {
    0% {
      opacity: 0;
      transform: translateY(5rem);
    }
    60% {
      transform: translateY(-0.25rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
