import styled from "styled-components";

export const SkeletonWrapper = styled.div`
display: flex;
justify-content: center;
gap: 7.5rem;
flex-wrap: wrap;


`

export const SkeletonStyle = styled.div`
border-radius: 10px;
margin: 7.5rem  1.75rem;
height: 45rem;
width: 30rem;
opacity: .7;

animation: skell-loading 1s linear infinite alternate;

@keyframes skell-loading {
    0% {
        background-color: hsl(200, 0%, 70%);
    }
    100% {
        background-color: hsl(200, 20%, 95%);
    }
}

`