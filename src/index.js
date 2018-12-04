import Grid from "./grid";
import { makeElement } from './dom_functions';
import Tone from 'tone';
import Player from './player';
import Sequence from './sequence';
import Controller from './controllers';

document.addEventListener("DOMContentLoaded", () => {
  const div = (...args) => makeElement('div', ...args);

  const grid = new Grid();
  const eleGrid = grid.create();

  // const gridObj = grid.setPosition();
  const sequence = new Sequence();
  const player = new Player(sequence);

  const controller = new Controller(player); //div
  const append = controller.appendControllers();

  const gridDiv = div({className: 'grid'});
  gridDiv.appendChild(eleGrid);
  gridDiv.append(append);

  const body = document.getElementById('body');
  body.appendChild(gridDiv);
});



const h1 = (...args) => makeElement(`h1`, ...args);


// and then ...
