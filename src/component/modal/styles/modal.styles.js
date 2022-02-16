import styled from "styled-components";

export const ModalButton = styled.button`
    font-size: 1.75rem;
    padding: 1.5rem 6rem;
    background: #1A1B21;
    color: #fff;
    border: none;
    
    width: 30rem;
    height: 5rem;
    
    transition: all 0.5s;

    
    
:hover {
    cursor: pointer;
    filter: brightness(120%);
    box-shadow: 5px 5px #7027a0D2;
    
}
`

export const CloseButton = styled.button`

display: flex;
align-items: center;
font-size: 1.75rem;

position: absolute;
top: 12px;
right: 12px;

background: #7027a0D2;
color: #f5f5f5d6;
padding: .5rem;
border-radius: 50%;
border: none;
cursor: pointer;


`