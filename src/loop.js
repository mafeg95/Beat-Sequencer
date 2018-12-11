class Loop {
  constructor(){

  }

  loopBarFunc(x, prevX, y){
    const prevNote = document.getElementsByClassName(`note-${[prevX, y]}`)[0];
    const note = document.getElementsByClassName(`note-${[x, y]}`)[0];
    if(prevNote.classList.value.includes('shaded')){
      prevNote.classList.remove('shaded');
    }
    note.classList.add('shaded');
  }

  resetLoop(currentColumn){
    for (let i = 0; i < 12; i++) {
      debugger
      currentColumn[0].classList.remove('shaded');
    }
  }
}

export default Loop;
