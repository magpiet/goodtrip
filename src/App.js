import React from 'react';
import logo from './logo192.png';
import './App.css';
import 'tachyons';
import sza from './sza.mp3';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      play: true,
    }
    this.audio = new Audio(sza);
  }

  playAudio = () => {
    if(this.state.play) {
      this.setState({play: false});
      this.audio.play();
      console.log('play');
    } else {
      this.setState({play: true});
      this.audio.pause();
      console.log('pause');
    }
  }

  render() {
     return (
        <div className="App">
          <div className="App-header">
            <p onClick={this.playAudio} className="pointer">
              <img src={logo} className="App-logo" alt="logo"/>
            </p>
            <div className="typewriter">
              <p className="typewriter-text">Hi! My name is Magnus!</p>
            </div>
          </div>
        </div>
     );
  }
}

export default App;
