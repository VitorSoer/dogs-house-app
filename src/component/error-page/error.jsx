import React from 'react'
import { Error } from './error.styles'
import {ButtonComponent} from '../button/button.styles'
import {useNavigate} from 'react-router-dom';


function ErrorPage() {

  let navigate = useNavigate();

  return (
    <Error> 
      <div>
        <h2>ERRO 404</h2> 
        <p>PÁGINA NÃO ENCONTRADA.</p>
      
        <ButtonComponent onClick={() => navigate('/dogs-house-app')} adote>Homepage</ButtonComponent>
      </div>
      
    </Error>
  )
}

export default ErrorPage