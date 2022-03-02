import styled from "styled-components"

export const PaginateWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 50%;
border-radius: 10px;
height: 8rem;
margin: 0 auto 2rem;
font-weight: 600;

cursor: pointer;

.paginationBtn{
    display: flex;
    column-gap: 2.5rem;
    list-style: none;
}

.nextBtn, .previousBtn{

    background: var(--purple);
    color: var(--gelid-white);
    border-radius: 5px;
    padding: 0 .5rem;
    transition: all .3s;

    :hover{
        background: var(--black);
    }
}

.activeBtn{
    color: var(--black);
    transform: translateY(-2px);
}
`