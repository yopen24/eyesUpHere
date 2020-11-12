import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "b181d01ef8ec4519bfacb05980766c91",
});

const particlesOptions = {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");

    app.models
      .predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
      .then(
        function (response) {
          console.log(response);
          // do something with response
        },
        function (err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* {
   
    <FaceRecognition /> } */}
      </div>
    );
  }
}

export default App;
