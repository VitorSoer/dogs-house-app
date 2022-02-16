
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
    font-size: 62.5%;

  @media only screen and (max-width: 1024px) {
    font-size: 56.25%;
  }
  @media only screen and (max-width: 400px) {
    font-size: 50%;
  }
}

body{
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
    color: #7027a0;

    padding: 4rem;

    @media only screen and (max-width: 768px){
      padding: 0;
    }
}
`