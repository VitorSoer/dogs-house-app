import styled from "styled-components";

export const FormStyle = styled.div`

display: flex;
flex-direction: column;

label{
    display: block;
    font-size: 1.75rem;
    margin-top: 1.5rem;
}
input{
    border: 1px solid #7027a0;
    padding: 1rem;
    width: 100%;

    :focus{
        outline: none;
    }
}

.submit-input{
    font-size: 1.5rem;
    color: #f5f5f5d6;
    margin-top: 2.5rem;
    background: #7027a0;
}
`