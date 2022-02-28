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
    border: 1px solid var(--purple);
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
    background: var(--purple);
}
`