class Note {
  constructor(pos, div){
    this.pos = pos;
    this.div = div;
    this.toggleOnOff = this.toggleOnOff.bind(this);

    this.clicked = false;

    this.div.addEventListener('click', () => {
      this.toggleOnOff();
    });
  }

  toggleOnOff(){
    if (this.div.classList.value.includes('off')){
      this.div.classList.remove('off');
      this.div.classList.add('on');
      this.clicked = true;
      console.log(this.div.className);
    } else {
      this.div.classList.remove('on');
      this.div.classList.add('off');
      this.clicked = false;
    }
  }
}

export default Note;
