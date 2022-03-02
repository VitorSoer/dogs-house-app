import React from 'react'
import Modal from 'react-modal';
import Form from '../form/form';
import { CloseButton, ModalButton } from './styles/modal.styles';

import { AiOutlineClose } from "react-icons/ai";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#1A1B21',
      color: 'var(--white)',
      height:'50rem',
      width:'40rem',
      display: 'flex',
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '2rem'
    },
  };

  Modal.setAppElement('#root');

function ModalBox() {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <ModalButton onClick={openModal}>Me adote</ModalButton>
      
      
      <Modal
      
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Seu amigo(a) te aguarda!</h3>
        <CloseButton><AiOutlineClose className='close-icon' onClick={closeModal}/></CloseButton>
        <Form/>
      </Modal>
    </div>
  );
}


export default ModalBox