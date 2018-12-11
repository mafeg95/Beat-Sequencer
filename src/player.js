import Tone from 'tone';
import Sequence from './sequence';

class Player {
  constructor(sequence, loopBar){
    this.player = new Tone.Players({
      'bass': 'http://127.0.0.1:8887/bass.wav',
      'hat': 'http://127.0.0.1:8887/hat2.wav',
      'snare': 'http://127.0.0.1:8887/snare.wav'
    }).toMaster();
    this.setSequence = sequence.setSequence;
    this.playPause = this.playPause.bind(this);
    this.loopBarFunc = loopBar.loopBarFunc;
    this.resetLoop = loopBar.resetLoop;

    const notes = ['A2', 'G2', 'F2', 'E2', 'D2', 'C2', 'B1', 'A1', 'G1', 'hat', 'snare', 'bass'];
    this.synth = new Tone.Synth().toMaster();



    this.loop = new Tone.Sequence((time, col) => {
      const result = this.setSequence(col);
      for (let i = 0; i < result.clicked.length; i++) {
        let prevCol;
        if (col === 0){
          prevCol = 15;
        } else {
          prevCol = (col - 1);
        }
        this.loopBarFunc(col, prevCol, i);
        if (result.clicked[i] && i < 9){
          this.synth.triggerAttackRelease(notes[i], '16n');
        } else if (result.clicked[i] && i >= 9){
          this.player.get(notes[i]).start(time, 0, '16n', 0);
        }
      }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '16n');

    Tone.Transport.start();

  }

  playPause(playButton, currentColumn){
    if (playButton.className === 'playing'){
      this.loop.start();
    } else {
      debugger
      this.loop.stop();
      this.resetLoop(currentColumn);
    }
  }



}

export default Player;
