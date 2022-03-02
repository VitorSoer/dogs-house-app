import styled from "styled-components";

export const NavBar = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
margin-top: -2rem;
background: #121212;
color: var(--gelid-white);
padding: 0 5rem;
font-size: 2rem;
width: 100%;
height: 10rem;
border-radius: 10px;

h2:hover{
    transition: all .3s;
    cursor: pointer;
    color: var(--green);
}

div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    font-size: 3rem;

    .link{
        display: flex;
        color: var(--gelid-white);
        transition: all .3s;

        :hover{
            color: var(--red);
        }
    }
    
    @media only screen and (max-width: 768px){
        font-size: 2.5rem;
    }
}

@media only screen and (max-width: 768px){
    font-size: 1.75rem;
    border-radius: 0;
    padding: 0 3rem;
    margin: 0;
}
`