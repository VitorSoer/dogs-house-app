import React from 'react'
import { ButtonComponent } from '../button/button.styles';
import { HeaderContainer, HeaderContent, PhotoContainer, TitleContainer} from './styles/header.styles';
import {Link} from 'react-scroll';


function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <span>DOG'S HOUSE</span>
                <TitleContainer>
                    <h1>Adoção, castração e treinamento para o seu pet</h1>
                    <p>CANIL ESPECIALIZADO</p>
                </TitleContainer>

                <Link to="feature" spy={true} smooth={true} offset={-150} duration={500}><ButtonComponent>Veja Mais</ButtonComponent></Link>
            </HeaderContent>

            <PhotoContainer />
        </HeaderContainer>

    )
}

export default Header