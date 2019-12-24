import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GiSpeaker } from "react-icons/gi";
import { colors } from "./colors.json";

class Main extends React.Component {
  constructor() {
    super();
    this.state = { color: "BLUE" };
  }

  color_changer() {
    const num = Math.ceil(Math.random() * colors.length);
    this.setState({ color: colors[num] });
  }

  speaker() {
    const msg = new SpeechSynthesisUtterance(this.state.color);
    window.speechSynthesis.speak(msg);
  }

  render() {
    return (
      <div className="button" onClick={() => this.color_changer()} style={{ backgroundColor: this.state.color }}>
        {this.state.color}
        <GiSpeaker onClick={(e) => { e.stopPropagation(); this.speaker(); }} stroke="black" strokeWidth="4" />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
