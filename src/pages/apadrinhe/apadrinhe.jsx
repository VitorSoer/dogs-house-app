import React from "react";
import Navbar from "../../component/navbar/navbar";
import { ApadrinheWrapper, ImageApadrinhe } from "./styles/apanhinhe.styles";

const Apadrinhe = () => {
  return (
    <div>
      <Navbar />
      <ApadrinheWrapper>
        <ImageApadrinhe />
        <div>
          <h2>Apadrinhe um pet!</h2>
          <span>
            Agora que você entende a importância deste ato de solidariedade,
            faça a sua parte. Sua doação pode salvar diversos pets e também nos
            ajuda a continuar.
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/vitorsoer/"
          >
            Ajude nossa causa
          </a>
        </div>
      </ApadrinheWrapper>
    </div>
  );
};

export default Apadrinhe;
