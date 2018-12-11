import { makeElement } from './dom_functions';
import Note from './note';


class Grid {
  constructor(){
    this.create = this.create.bind(this);
    this.div = (...args) => makeElement('div', ...args);
    this.inacurateGrid = {};
    this.grid = {};

  }

  createNote(x, y) {
    const div = this.div({className: `off note-${[x, y]}`});
    const pos = [x, y];
    const note = new Note(pos, div);
    this.inacurateGrid[pos] = note;
    return div;
  }

  createRow(y){
    const rows = this.div({className: `row row-${y}`});
    for (let x = 0; x < 16; x++) {
      const note = this.createNote(x, y);
      rows.appendChild(note);
    }
    return rows;
  }

  create(){
    const wrapper = this.div({className: 'wrapper'});
    for (var y = 0; y < 12; y++) {
      console.log('works');
      const eachRow = this.createRow(y);
      wrapper.appendChild(eachRow);
    }
    return wrapper;
  }

}

export default Grid;
