import styled from "styled-components";

export const ContatoWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--black);
    padding: 5rem;
    height: 60rem;

    margin: 2rem 0;

    border-radius: 15px;
    h2{
        font-size: 3.75rem;
        color: var(--gelid-white);
        text-align: center;
    }
    
    div{
        width: 55rem;

        @media only screen and (max-width: 600px){
            width: 30rem;
        }
    }

    .icons-div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;

        margin-top: 5rem;
        font-size: 3.5rem;
        text-align: center;
    
        a{
            color: var(--gelid-white);
            transition: all .3s;

            :hover{
                color: var(--green);
            }
        }
    }

    @media only screen and (max-width: 768px) {
            border-radius: 0;
        }

`