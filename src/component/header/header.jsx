import React from 'react'
import { ButtonComponent } from '../button/button.styles';
import { HeaderContainer, HeaderContent, PhotoContainer, TitleContainer} from './styles/header.styles';



function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <span>DOG'S HOUSE</span>
                <TitleContainer>
                    <h1>Adoção, castração e treinamento para o seu pet</h1>
                    <p>CANIL ESPECIALIZADO</p>
                </TitleContainer>

                <ButtonComponent>Veja Mais</ButtonComponent>
            </HeaderContent>

            <PhotoContainer />
        </HeaderContainer>

    )
}

export default Header