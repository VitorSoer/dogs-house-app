import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  PhotoContainer,
  TitleContainer,
} from "./styles/header.styles";
import { Link } from "react-scroll";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>DOG'S HOUSE</h2>
        <TitleContainer>
          <h1>Adoção, castração e treinamento para o seu pet</h1>
          <p>CANIL ESPECIALIZADO</p>
        </TitleContainer>

        <Link
          to="feature"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <span>Veja mais</span>
        </Link>
      </HeaderContent>

      <PhotoContainer />
    </HeaderContainer>
  );
}

export default Header;
