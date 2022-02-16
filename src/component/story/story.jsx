import React from 'react'
import { StoryContent, StoryPhoto, StoryWrapper } from './styles/story.styles'
import { ButtonComponent } from '../button/button.styles'

import {useNavigate} from 'react-router-dom';

function Story() {

    let navigate = useNavigate();

    return (
        <StoryWrapper>
            <StoryPhoto />
            <StoryContent>
                
                <h1>A melhor escolha que fizemos, incrível!</h1>
                <span>SATISFAÇÃO GARANTIDA</span>
                <p>Atendimento nota mil, equipe atenciosa e cuidadosa, animais felizes e saudáveis. Estamos super satisfeitos com o nosso cachorrinho.</p>
                <ButtonComponent onClick={() => navigate('/dogs-house-app/adote')}> Encontre seu pet</ButtonComponent>
            </StoryContent>

        </StoryWrapper>

    )
}

export default Story