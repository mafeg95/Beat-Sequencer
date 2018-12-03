import { makeElement } from './dom_functions';
import Note from './note';
import Sounds from './sounds';


class Grid {
  constructor(){
    this.create = this.create.bind(this);
    this.div = (...args) => makeElement('div', ...args);
    this.inacurateGrid = {};
    this.grid = {};
    this.sounds = new Sounds().sounds;
  }

  createNote(x, y, sound) {
    //crete a new note with the x, y coordinates;
    const pos = [x, y];
    const note = new Note(pos, sound);
    this.inacurateGrid[pos] = note;
    return this.div({className: `off note-${[x, y]}`});
  }

  createRow(sound, y){
    const rows = this.div({className: `row row-${y}`});
    for (let x = 0; x < 16; x++) {
      const note = this.createNote(x, y, sound);
      rows.appendChild(note);
    }
    return rows;
  }

  create(){
    const wrapper = this.div({className: 'wrapper'});
    this.sounds.forEach((sound, y) => {
      const eachRow = this.createRow(sound, y);
      wrapper.appendChild(eachRow);
    });
    return wrapper;
  }

  setPosition(){
    const grid = {};
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 1; y++) {
        const pos = [x, y];
        const note = document.getElementsByClassName(`note-${pos}`)[0];
        const noteOffset = note.getBoundingClientRect();
        const offset = [`[${noteOffset.right}, ${noteOffset.bottom}]`];
        grid[offset] = this.inacurateGrid[pos];
      }
    }
    return grid;
  }
}

export default Grid;
