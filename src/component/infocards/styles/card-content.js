import styled, { css } from "styled-components";


export const DivText = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 2.75rem
    }

    h2{
        font-size: 1.5rem;
        font-weight: 400;
        color: rgba(0, 225, 255, .75);

        ${props => props.ajude && css`
            color: #00A467;
        `}
        
        ${props => props.adote && css`
            color: #B60121;

        `}
    }

`

export const DivContent = styled.div`

margin: 0 4rem;

p{
    font-size: 1.4rem;
    padding-bottom: .5rem;
}

`
