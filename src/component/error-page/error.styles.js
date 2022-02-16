import styled from "styled-components";

export const Error = styled.div`

display: flex;
justify-content: center;
align-items: center;
font-size: 5rem;
color: #F5F5F5D6;
font-weight: 600;
margin-bottom: 2rem;

@media only screen and (max-width: 320px) {
    font-size: 3.5rem;
}

div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #121212;
    
    width: 100%;
    height: 80vh;
}

p{
    font-size: 2rem;
    margin-bottom: 3.5rem;
}

`