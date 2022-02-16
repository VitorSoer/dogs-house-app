import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterStyle } from './styles/footer.styles'

function Footer() {

  let navigate = useNavigate();
  return (
    <FooterStyle>
        <ul>
            <li onClick={() => navigate('/adote')}>ENCONTRE SEU PET</li>
            <li>APADRINHE UM PET</li>
            <li>NOSSAS UNIDADES</li>
            <li>FALE CONOSCO</li>
        </ul>
    </FooterStyle>
  )
}

export default Footer