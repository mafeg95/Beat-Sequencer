class Sequence {
  constructor(){

  }

  setSequence(col){
    const clicked = [];
    const notes = [];
    for (let y = 0; y < 9; y++) {
      const note = document.getElementsByClassName(`note-${[col,y]}`)[0];
      if (note.classList.value.includes('on')){
        clicked.push(true);
      } else {
        clicked.push(false);
      }
      notes.push(note);
    }
    return {clicked, notes};
  }
}

export default Sequence;
