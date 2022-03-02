import styled from "styled-components";

export const FooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--black);
    font-size: 1.8rem;
    color: var(--gelid-white);
    height: 15rem;
    width: 100%;

    border-radius: 10px;

    @media only screen and (max-width: 768px){
        border-radius: 0;
    }

    @media only screen and (max-width: 480px){
        height: 30rem;
    }
    
    ul{
        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 480px){
            flex-direction: column;
        }
    }

    li{
        
        list-style: none;
        margin: 0 5rem;

        :hover{
            cursor: pointer;
            color: var(--light-blue);
            transform: translateY(-2px);
        }

        @media only screen and (max-width: 768px){
            text-align: center;
            font-size: 1.5rem;
            margin: 2rem;
        }
    }

`