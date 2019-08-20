import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    counterVal: 10
  };

  onUp = () => {
    this.setState({
      counterVal: this.state.counterVal + 1
    });
  };
  onDown = () => {
    this.setState({
      counterVal: this.state.counterVal - 1
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h3>{this.state.counterVal}</h3>
        <button onClick={this.onUp}>Up</button>
        <button onClick={this.onDown}>Down</button>
      </div>
    );
  }
}

export default App;
