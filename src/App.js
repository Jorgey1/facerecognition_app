import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import './App.css';


const app = new Clarifai.App({
  apiKey: '9896faef79f247498b86fbc66467c12a'
 });

const particlesOptions = {   
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 500
      }
    }
  },
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    },
    "modes": {
      "repulse": {
          "distance": 100,
          "duration": 4
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
    .predict(
      Clarifai.COLOR_MODEL,
      this.state.input)
      .then(
      function(response) {
        console.log(response);
        //do something with response
      },
      function(err) {
        //there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" 
         params={particlesOptions}
        />
        <Navigation/>       
        <Logo />
        <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>        
      </div>
    )
  }
}

export default App;