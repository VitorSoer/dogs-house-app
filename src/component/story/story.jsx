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
                <span>SATISFAÇÃO GARANTIDA</span>
                <h1>A melhor escolha que fizemos, incrível!</h1>
                <p>Atendimento nota mil, equipe atenciosa e cuidadosa, animais felizes e saudáveis. Estamos super satisfeitos com o nosso cachorrinho.</p>
                <ButtonComponent onClick={() => navigate('/adote')}> Encontre seu pet</ButtonComponent>
            </StoryContent>

        </StoryWrapper>

    )
}

export default Story