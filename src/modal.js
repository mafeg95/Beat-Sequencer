import { makeElement } from './dom_functions';
import Tone from 'tone';

class Modal {
  constructor(){

  }

  closeModal(){
    const tone = new Tone();
    const modalBackground = document.getElementById('modal-background');
    const modalChild = document.getElementById('modal-background');
    const close = document.getElementById('close-x');
    modalBackground.addEventListener('click', () => {
      modalBackground.classList.add('close-modal');
      if (tone.context.state !== 'running') {
        
        tone.context.resume();
      }
    });

    close.addEventListener('click', () => {
      modalBackground.classList.add('close-modal');
      if (tone.context.state !== 'running') {
        tone.context.resume();
      }
    });

  }

}

export default Modal;
