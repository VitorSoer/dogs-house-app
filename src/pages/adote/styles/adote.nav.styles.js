import styled from "styled-components";

export const NavBar = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
margin-top: -2rem;
background: #121212;
color: var(--gelid-white);
padding: 0 5rem;
font-size: 1.75rem;
width: 100%;
height: 10rem;


div{
    display: flex;
    align-items: center;
    font-size: 3rem;

    @media only screen and (max-width: 768px){
    font-size: 2.5rem;

    .link{
        color: var(--gelid-white);
    }
}
    
}

    span{

        display: flex;
        justify-content: center;

        cursor: pointer;
        color: var(--gelid-white);
        list-style: none;
        margin: 0 1.75rem;
        transition: all .3s;

        :hover{
            color: orange;
        }

        @media only screen and (max-width: 1024px){
            margin: 0 1rem;
            
}
}


@media only screen and (max-width: 768px){
    font-size: 1.2rem;
    padding: 0 3rem;
    margin: 0;
}


`