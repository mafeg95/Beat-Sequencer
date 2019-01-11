import { makeElement } from './dom_functions';

class Modal {
  constructor(){

  }

  closeModal(){
    const modalBackground = document.getElementById('modal-background');
    const modalChild = document.getElementById('modal-background');
    const close = document.getElementById('close-x');
    modalBackground.addEventListener('click', () => {
      modalBackground.classList.add('close-modal');
    });

    close.addEventListener('click', () => {
      modalBackground.classList.add('close-modal');
    });

  }

}

export default Modal;
