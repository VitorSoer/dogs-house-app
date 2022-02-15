import styled, {css} from "styled-components";

export const NavBar = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

background: linear-gradient(20deg, #121212 50%, #7027a0 50%);
color: #F5F5F5D6;
padding: 0 5rem;
font-size: 1.75rem;
width: 100%;
height: 8rem;
border-radius: 15px ;

${props => props.different && css`
    background: #7027a0;
    height: 2.5rem;
    margin-bottom: 3.5rem;
    border-radius: 0 0 15px 15px;
  `}

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