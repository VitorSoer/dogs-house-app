import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  --white: #fff;
  --gelid-white: #F5F5F5D6;
  --black: #121212;

  --light-blue: rgba(0, 225, 255, 0.8);
  --blue: #005682;
  --purple: #7027a0;
  --dark-purple: #7027a0D2;
  --green: #00A467;
  --red: #B60121;
}

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
    font-size: 53.15%;
  }
}

body{
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
    color: var(--purple);

    padding: 4rem;

    @media only screen and (max-width: 768px){
      padding: 0;
    }
}
`;
