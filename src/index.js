import Grid from "./grid";
import { makeElement } from './dom_functions';
import Tone from 'tone';
import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
  const grid = new Grid();
  const eleGrid = grid.create();
  const body = document.getElementById('body');
  body.appendChild(eleGrid);

  // const gridObj = grid.setPosition();
  const player = new Player();
  console.log('works');

  const players = new Tone.Player('./C2.mp3').toMaster();
  // console.log(players);
  Tone.Buffer.on('load', () => {
    document.querySelector('#status').textContent = players.loaded;
    players.start();
  });


  // const players = new Tone.Player({
  //     // low: 'https://tonejs.github.io/examples/audio/casio/C2.mp3',
  //     // high: 'https://tonejs.github.io/examples/audio/casio/A2.mp3',
  //     test: './dist/audio/Hat.wav'
  //     // test: 'https://freesound.org/s/128971/'
  //   }, () => {
  //
  //     document.querySelector('#status').textContent = players.loaded;
  //     // players.get('low').start();
  //     // players.get('high').start('+0.5');
  //     players.get('test').start();
  // }).toMaster();
  // player.buffer.load('https://freesound.org/s/128971/');
  // player.start();
  // player.loop.start();
  // player.loop.stop();
});



const h1 = (...args) => makeElement(`h1`, ...args);
const div = (...args) => makeElement('div', ...args);

// and then ...
