import styled , {css}from "styled-components";

export const ButtonComponent = styled.button`
    
    font-size: 1.75rem;
    padding: 1.5rem 6rem;
    background-color: var(--purple);
    color: var(--white);
    border: none;
    border-radius: 10px;

    width: 30rem;
    height: 5rem;
    
    transition: all 0.5s;

    ${props => props.active && css`
    background: #1A1B21;
    color: white;

    &&:hover {
        cursor: pointer;
        filter: brightness(120%);
        box-shadow: 5px 5px var(--purple);
    }

    @media only screen and (max-width: 1024px){
        width: 100%;
    }
  `}

  ${props => props.apadrinhe && css`
    background: var(--blue);
    color: white;

    &&:hover {
        cursor: pointer;
        filter: brightness(125%);
        box-shadow: none
    }

  `}
  
  ${props => props.ajude && css`
    background: var(--green);
    color: white;

    &&:hover {
        cursor: pointer;
        filter: brightness(125%);
        box-shadow: none
    }

  `}

  ${props => props.adote && css`
    background: var(--red);
    color: white;

    &&:hover {
        cursor: pointer;
        filter: brightness(125%);
        box-shadow: none
    }

  `}
  
    :hover {
        cursor: pointer;
        filter: brightness(120%);
        box-shadow: 5px 5px var(--light-blue);
    }
`