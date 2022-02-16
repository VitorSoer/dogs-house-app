import styled from "styled-components";

export const FooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #121212;
    font-size: 1.8rem;
    color: #F5F5F5D6;
    height: 15rem;
    width: 100%;

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
            color: rgba(0, 225, 255);
            transform: translateY(-2px);
        }

        @media only screen and (max-width: 768px){
            text-align: center;
            font-size: 1.5rem;
            margin: 2rem;
        }
    }

`