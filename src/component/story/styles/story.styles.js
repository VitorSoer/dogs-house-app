import styled from "styled-components";

export const StoryWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #1a1b21;
  margin-bottom: 5rem;
  border-radius: 10px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
  }
`;

export const StoryContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;

  padding: 5rem;
  height: 50rem;
  width: 55%;
  color: var(--gelid-white);

  span {
    font-size: 1.75rem;
    color: var(--light-blue);
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 3.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 40rem;

    align-items: center;
    text-align: center;
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    height: 50rem;
    padding: 2.5rem;
    font-size: 1.8rem;
  }
`;

export const StoryPhoto = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;

  height: 55rem;
  width: 45%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 35rem;
  }
`;
