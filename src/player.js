import Tone from 'tone';
import Sequence from './sequence';

class Player {
  constructor(sequence){
    this.player = new Tone.Players({
      'C2': 'https://tonejs.github.io/examples/audio/casio/C2.mp3',
      'A2': 'https://tonejs.github.io/examples/audio/casio/A2.mp3',
      'D2': 'https://tonejs.github.io/examples/audio/casio/D2.mp3',
      'E2': 'https://tonejs.github.io/examples/audio/casio/E2.mp3',
      'F2': 'https://tonejs.github.io/examples/audio/casio/F2.mp3',
      'G2': 'https://tonejs.github.io/examples/audio/casio/G2.mp3',
      'B1': 'https://tonejs.github.io/examples/audio/casio/B1.mp3',
      'G1': 'https://tonejs.github.io/examples/audio/casio/Gs1.mp3',
      'A1': 'https://tonejs.github.io/examples/audio/casio/A1.mp3'
    }).toMaster();
    this.setSequence = sequence.setSequence;
    this.playPause = this.playPause.bind(this);

    // const notes = ['G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2'];
    const notes = ['A2', 'G2', 'F2', 'E2', 'D2', 'C2', 'B1', 'A1', 'G1'];

    this.loop = new Tone.Sequence((time, col) => {
      const result = this.setSequence(col);
      for (let i = 0; i < result.clicked.length; i++) {
        if (result.clicked[i]){
          this.player.get(notes[i]).start(time, 0, '16n', 0);
        }
      }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '16n');

    Tone.Transport.start();

  }

  playPause(playButton){
    if (playButton.className === 'playing'){
      this.loop.start();
    } else {
      this.loop.stop();
    }
  }



}

export default Player;
