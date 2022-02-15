import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;

`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;


    background: #1A1B21;
    padding: 4.5rem 5rem;
    height: 90vh;
    width: 61%;

    @media only screen and (max-width: 480px){
    align-items: center;
        text-align: center;
    width: 100%;
}
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 35rem;

    font-size: 2.5rem;
    color: #F5F5F5D6;

p{
    font-size: 1.8rem;
    font-weight: 600;
    color: rgba(0, 225, 255, 0.8);
    
}

@media only screen and (max-width: 768px){
    height: 40rem;
}
`

export const PhotoContainer = styled.div`

background-image: linear-gradient(to right bottom,
    rgba(112,39,160, .6),
     rgba(112,39,160, 1)),
      url('https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
background-position: center;
background-size: cover;

height: 90vh;
width: 39%;

@media only screen and (max-width: 480px){
    display: none;
}
`

export const Logo = styled.h1`
    font-size: 3.5rem;

`