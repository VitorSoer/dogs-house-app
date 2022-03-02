import styled from "styled-components";

export const FormStyle = styled.div`

display: flex;
flex-direction: column;

label{
    display: block;
    font-size: 1.75rem;
    margin: 1.5rem 0 .25rem;
    color: var(--light-blue);
}

input{
    border: 1px solid var(--blue);
    border-radius: 5px;
    padding: 1rem;
    width: 100%;

    :focus{
        outline: none;
    }
}

.submit-input{
    font-size: 1.5rem;
    color: var(--gelid-white);
    margin-top: 2.5rem;
    background: var(--light-blue);
    transition: all .3s;

    :hover{
        cursor: pointer;
        filter:brightness(115%);
    }
}
`