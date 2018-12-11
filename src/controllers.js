import {makeElement} from './dom_functions';


class Controller {
  constructor(player){
    this.button = (...args) => makeElement('button', ...args);
    this.div = (...args) => makeElement('div', ...args);
    this.h4 = (...args) => makeElement('h4', ...args);
    this.input = (...args) => makeElement('input', ...args);
    this.label = (...args) => makeElement('label', ...args);
    this.createPlayPause = this.createPlayPause.bind(this);
    this.playPause = player.playPause;
    // this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  appendControllers(){
    const div = this.div({className: 'controllers-wrapper'});
    const child = this.createControllers();
    div.appendChild(child);
    return div;
  }

  createPlayPause(){
    const playLabel = this.label({className: 'playLabel'}, 'Play / Pause');
    const playButton = this.button({id: 'playButton', className: 'paused'}, 'play');
    playLabel.appendChild(playButton);
    this.addListener(playButton);
    return playLabel;
  }


  createControllers(){
    const div = this.div({className: 'controllers'});
    const playCluster = this.createPlayPause();
    div.appendChild(playCluster);
    return div;
  }

  addListener(playButton){
    playButton.addEventListener('click', () => {
      const button = document.getElementById('playButton');
      const currentColumn = document.getElementsByClassName('shaded');
      this.togglePlayPause(button);
      this.playPause(button, currentColumn);
    });
  }

  togglePlayPause(button){
    if (button.className === 'playing'){
      button.classList.remove('playing');
      button.classList.add('paused');
      button.textContent = 'play';
    } else {
      button.classList.add('playing');
      button.classList.remove('paused');
      button.textContent = 'pause';
    }
  }
}

export default Controller;
