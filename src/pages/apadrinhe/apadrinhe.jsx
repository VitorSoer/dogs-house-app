import React from 'react'
import PaypalCheckout from '../../component/paypal/paypalCreateButton';
import { ApadrinheWrapper, ImageApadrinhe } from './styles/apanhinhe.styles';

const Apadrinhe = () => {
  const product = {
    description: 'Ajude-nos a continuar!',
    price: '50'
  }

  return (
    <div>
      <ApadrinheWrapper>
        <ImageApadrinhe />
        <div>
          <h2>Apadrinhe um pet!</h2>
          <span>Agora que você entende a importância deste ato de solidariedade, faça a sua parte. Sua doação pode salvar diversos pets e também nos ajuda a continuar.</span>
          <PaypalCheckout product={product} />
        </div>
      </ApadrinheWrapper>
    </div>
  );
}

export default Apadrinhe;