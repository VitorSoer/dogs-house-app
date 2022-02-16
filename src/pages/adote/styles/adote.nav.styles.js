import styled from "styled-components";

export const NavBar = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

background: #121212;
color: #F5F5F5D6;
padding: 0 5rem;
font-size: 1.75rem;
width: 100%;
height: 15rem;


ul{
    display: flex;
    align-items: center;
    font-size: 3rem;
    
}

li{

    cursor: pointer;
    color: #F5F5F5D6;
    list-style: none;
    margin: 0 1.75rem;
    transition: all .3s;

    :hover{
        color: orange;
    }
}

`