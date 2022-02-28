import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterStyle } from './styles/footer.styles'

function Footer() {

  let navigate = useNavigate();
  return (
    <FooterStyle>
      <ul>
        <li onClick={() => navigate('/dogs-house-app/')}>HOMEPAGE</li>
        <li onClick={() => navigate('/dogs-house-app/adote')}>ENCONTRE SEU PET</li>
        <li onClick={() => navigate('/dogs-house-app/apadrinhe')}>APADRINHE UM PET</li>
        <li onClick={() => navigate('/dogs-house-app/contato')}>FALE CONOSCO</li>
      </ul>
    </FooterStyle>
  )
}

export default Footer