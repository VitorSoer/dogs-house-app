import styled from "styled-components";

export const CardStyle = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    box-shadow: 5px 15px 15px rgba(0,0,0, .5);
    font-size: 2rem;
    color: #F5F5F5D6;
    width: 35rem;
    height: 47.5rem;

    background: #1A1B21;
    transition: all .3s;

    :hover{
        cursor: pointer;
        transform: translatey(-5px);
    }
`

