import styled from "styled-components";

export const AdoteWrapper = styled.div`

display: flex;
justify-content: center;

gap: 7.5rem;
flex-wrap: wrap;

margin-bottom: 7.5rem;
`

export const CardStyle = styled.div`
display: flex;

align-items: center;
text-align: center;
flex-direction: column;
margin: 7.5rem  1.75rem;
cursor: pointer;
height: 40rem;
width: 30rem;



@media only screen and (max-width: 1024px){
    height: 45rem;
    width: 35rem;
    font-size: 2.25rem;
}

img{
    
    height: 75%;
    width: 100%;

    object-position: center;
    object-fit: cover;
}

h1{
    background: #7027a0;
    color: #F5F5F5D6;

    width: 80%;
    justify-self: center;
    font-size: 3.5rem;
    
    transform: translateY(-50%);

    @media only screen and (max-width: 1024px){
        font-size: 4rem;
    }
}


.grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;

    align-items: center;
    justify-content: center;
    margin: -2rem auto 1.5rem auto;
    
    flex-wrap: wrap;


    span{
        display: flex;
        align-items:center;

        gap: 1rem;
        width: 100%;
        
        margin: 1rem 2rem;
        

        @media only screen and (max-width: 378px){
        text-align: center;
        margin: 1rem 0;
        }
    }
}
`