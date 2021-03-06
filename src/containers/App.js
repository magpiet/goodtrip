import React from 'react';
import logo from './logo512.png';
import './App.css';
import 'tachyons';
import Menu from '../components/Menu';
import {options} from '../components/options';
import birds from './birds.mp3';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      play: true,
      route: 'home'
    }
    this.audio = new Audio(birds);
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
    if (this.state.route === 'home') {
      this.onRouteChange('menu');
    } else {
      this.onRouteChange('home');
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
     return (
        <div className="App">
            {this.state.route === 'menu' ?
              <Menu options={options} onRouteChange={this.onRouteChange} />
              :
              <div className="App-header body">
                <p onClick={this.onClickImage} className="fade-in pointer grow">
                  <img src={logo} className="App-logo" alt="logo"/>
                </p>
                <div className="typewriter fade-in">
                  <p onClick={this.playAudio} className="typewriter-text pointer">Have a good trip!</p>
                </div>
              </div>
            } 
        </div>
     );
  }
}

export default App;
