import Tone from 'tone';

class Player {
  constructor(){
    this.player = new Tone.Player({
      bass: './audio/Bass.wav',
    }, {"onload": Tone.noOp}).toMaster();

    this.buffer = new Tone.Buffer('./audio/Kick.wav', () => {
      var buff = this.buffer.get();
    });
    const noteNames = ['kick', 'hat', 'bass', 'snare'];
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    // const synth = new Tone.Synth().toMaster();
    this.loop = new Tone.Sequence((time, col) => {
      // for (var i = 0; i < 4; i++) {
      //   this.player.get(noteNames[i]).start(time, 0, '8n', 0);
      // }
      // console.log(col);
      // this.buffer.load('https://freesound.org/s/128971/');
      this.player.start();
      // synth.triggerAttackRelease(notes[col], "8n");
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '4n');
  //play a middle 'C' for the duration of an 8th note
    Tone.Transport.start();

  }




}

export default Player;
