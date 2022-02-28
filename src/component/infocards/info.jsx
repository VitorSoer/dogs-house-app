import React from 'react';
import { DivImage } from './styles/card-image.styles';
import { CardStyle } from './styles/card.styles';
import { DivContent, DivText } from '../infocards/styles/card-content';
import { ButtonComponent } from '../button/button.styles';
import { InfoWrapper } from './styles/info.styles';

import {useNavigate} from 'react-router-dom';


function Info() {


  let navigate = useNavigate();

  return (
    <InfoWrapper>
      <CardStyle>

        <DivImage apadrinhe/>
        <DivText>
          <h1>Apadrinhe um pet</h1>
          <h2>Seja madrinha ou padrinho</h2>
        </DivText>

        <DivContent>
          <p>Todo o valor é revertido na compra de vacinas, brinquedos, medicamentos, atendimento veterinário e ração.</p>
        </DivContent>
        <ButtonComponent onClick={() => navigate('/dogs-house-app/apadrinhe')} apadrinhe>Vamos nessa!</ButtonComponent>



      </CardStyle>
      <CardStyle>

        <DivImage adote/>
        <DivText adote>
          <h1>Adote um pet</h1>
          <h2>Eles precisam de nós!</h2>
        </DivText>

        <DivContent>
          <p>Visite uma Dog's House hoje mesmo, temos diversos pets esperando por um tutor para chamar de seu.</p>
        </DivContent>
        <ButtonComponent onClick={() => navigate('/dogs-house-app/adote')} adote>Encontre seu pet!</ButtonComponent>



      </CardStyle>
      <CardStyle>

        <DivImage ajude/>
        <DivText ajude>
          <h1>Ajude nossa causa</h1>
          <h2 >Precisamos continuar</h2>
        </DivText>

        <DivContent>
          <p>Milhões de animais estão sujeitos a maus-tratos, doenças, fome e atropelamentos nas ruas. Ajude-nos a Protegê-los.</p>
        </DivContent>
        <ButtonComponent onClick={() => navigate('/dogs-house-app/adote')} ajude>Ajude-nos!</ButtonComponent>



      </CardStyle>

    </InfoWrapper>

  );
}

export default Info;
