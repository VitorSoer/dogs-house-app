import React from 'react';
import { DivImage } from './styles/card-image.styles';
import { CardStyle } from './styles/card.styles';
import { DivContent, DivText } from '../infocards/styles/card-content';
import { ButtonComponent } from '../button/button.styles';
import { InfoWrapper } from './styles/info.styles';




function Info() {
  return (
    <InfoWrapper>
      <CardStyle>

        <DivImage apadrinhe/>
        <DivText>
          <h1>Apadrinhe um pet</h1>
          <h2>Seja madrinha ou padrinho</h2>
        </DivText>

        <DivContent>
          <p>Você escolhe qual pet quer ajudar e se compromete a doar mensalmente. Todo o valor é revertido na compra de vacinas, medicamentos, atendimento veterinário e ração.</p>
        </DivContent>
        <ButtonComponent apadrinhe>Vamos nessa!</ButtonComponent>



      </CardStyle>
      <CardStyle>

        <DivImage adote/>
        <DivText adote>
          <h1>Adote um pet</h1>
          <h2>Eles precisam de nós!</h2>
        </DivText>

        <DivContent>
          <p>Visite uma Dog's House dedicada à adoção e encontre o seu xodó. Lá você irá conhecer nossos colaboradores e eles irão lhe ajudar nessa busca por um pet para ser seu novo amigo.</p>
        </DivContent>
        <ButtonComponent adote>Encontre seu pet!</ButtonComponent>



      </CardStyle>
      <CardStyle>

        <DivImage ajude/>
        <DivText ajude>
          <h1>Ajude nossa causa</h1>
          <h2 >Precisamos continuar</h2>
        </DivText>

        <DivContent>
          <p>Milhões de animais estão sujeitos a maus-tratos, doenças, fome e atropelamentos nas ruas. Ajude-nos a Protegê-los. Junte-se a nós na causa. Pelo Bem Estar Animal.</p>
        </DivContent>
        <ButtonComponent ajude>Ajude-nos!</ButtonComponent>



      </CardStyle>

    </InfoWrapper>

  );
}

export default Info;
