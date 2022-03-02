import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  border-radius: 10px;

  box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.325);
  overflow: hidden;

  font-size: 2rem;
  color: var(--gelid-white);
  width: 35rem;
  height: 47.5rem;

  background: #1a1b21;
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    transform: translatey(-5px);
  }
`;
