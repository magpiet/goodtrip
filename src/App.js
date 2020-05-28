import React from 'react';
import logo from './logo192.png';
import './App.css';
import 'tachyons';
import sza from './sza.mp3';
import Menu from './Menu';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      play: true,
      route: 'home'
    }
    this.audio = new Audio(sza);
  }

  playAudio = () => {
    if(this.state.play) {
      this.setState({play: false});
      this.audio.play();
    } else {
      this.setState({play: true});
      this.audio.pause();
    }
  }

  onClickImage = () => {
    this.onRouteChange('menu');
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
     return (
        <div className="App">
            {this.state.route === 'menu' ?
              <Menu onRouteChange={this.onRouteChange} />
              :
              <div className="App-header">
                <p onClick={this.onClickImage} className="fade-in pointer">
                  <img src={logo} className="App-logo" alt="logo"/>
                </p>
                <div className="typewriter fade-in">
                  <p onClick={this.playAudio} className="typewriter-text pointer">Welcome! Press the Nazar to join. </p>
                </div>
              </div>
            } 
        </div>
     );
  }
}

export default App;
