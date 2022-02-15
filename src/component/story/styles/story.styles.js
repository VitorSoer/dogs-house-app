import styled from 'styled-components';

export const StoryWrapper = styled.div`

display: flex;
align-items: center;
background: #1A1B21;
margin-bottom: 5rem;

@media only screen and (max-width: 768px){
      flex-direction: column;
    }

`

export const StoryContent = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

padding: 7.5rem;
height: 50rem;
width: 55%;
color: #f5f5f5d6;


span{
    font-size: 1.75rem;
    color: rgba(0, 225, 255, 0.8);
}

@media only screen and (max-width: 768px){
    width: 100%;
    height: 40rem;

    align-items: center;
    text-align: center;
    justify-content: center;
}
@media only screen and (max-width: 480px){
    height: 50rem;
    padding: 2.5rem;
}
`

export const StoryPhoto = styled.div`

background-image: linear-gradient(to right bottom, rgba(0,0,0, .2), rgba(0,0,0, .5)), url('https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
background-position: center;
background-size: cover;

height: 55rem;
width: 45%;

@media only screen and (max-width: 768px){
    width: 100%;
    height: 35rem;
}

`