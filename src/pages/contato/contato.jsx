import React from 'react'
import Form from '../../component/form/form';
import { ContatoWrapper } from './styles/contato.styles';
import Navbar from '../../component/navbar/navbar';
import { FaGithubAlt, FaLinkedin, FaWhatsapp  } from "react-icons/fa";

function Contato() {
    return (
        <div>
        <Navbar/>
            <ContatoWrapper>
                <div>
                    <h2>Quer adotar um pet?</h2>
                    <Form />
                </div>
                <div className='icons-div'>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/vitorsoer/"><FaLinkedin /></a>
                    <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=5511994876927&text=Ol%C3%A1,%20como%20vai?."><FaWhatsapp /></a>
                    <a target='_blank' rel='noreferrer' href="https://github.com/VitorSoer"><FaGithubAlt /></a>
                </div>
            </ContatoWrapper>
        </div>
    )
}

export default Contato;