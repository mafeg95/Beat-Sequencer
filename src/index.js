import Grid from "./grid";
import { makeElement } from './dom_functions';
import Tone from 'tone';
import Player from './player';
import Sequence from './sequence';
import Controller from './controllers';
import Loop from './loop';
import Modal from './modal';

document.addEventListener("DOMContentLoaded", () => {
  const div = (...args) => makeElement('div', ...args);

  const modal = new Modal();
  modal.closeModal();

  const grid = new Grid();
  const eleGrid = grid.create();

  const sequence = new Sequence();
  const loopBar = new Loop();
  const player = new Player(sequence, loopBar);

  const controller = new Controller(player);
  const append = controller.appendControllers();

  const gridDiv = div({className: 'grid'});
  gridDiv.appendChild(eleGrid);
  gridDiv.append(append);



  const main = document.getElementById('main');
  main.appendChild(gridDiv);
});



const h1 = (...args) => makeElement(`h1`, ...args);


// and then ...
