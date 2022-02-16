import styled , {css}from "styled-components";

export const ButtonComponent = styled.button`
    
    font-size: 1.75rem;
    padding: 1.5rem 6rem;
    background-color: #7027a0;
    color: #fff;
    border: none;
    
    width: 30rem;
    height: 5rem;
    
    transition: all 0.5s;

    ${props => props.active && css`
    background: #1A1B21;
    color: white;

    &&:hover {
        cursor: pointer;
        filter: brightness(120%);
        box-shadow: 5px 5px #7027a0D2;
    }

    @media only screen and (max-width: 1024px){
        width: 100%;
    }
  `}

  ${props => props.apadrinhe && css`
    background: #005682;
    color: white;

    &&:hover {
        cursor: pointer;
        filter: brightness(125%);
        box-shadow: none
    }

  `}
  
  ${props => props.ajude && css`
    background: #00A467;
    color: white;

    &&:hover {
        cursor: pointer;
        filter: brightness(125%);
        box-shadow: none
    }

  `}

  ${props => props.adote && css`
    background: #B60121;
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
        box-shadow: 5px 5px rgba(0, 225, 255, 0.8);
    }

`