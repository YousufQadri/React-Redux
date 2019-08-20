import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  // state = {
  //   counterVal: 10
  // };

  // onUp = () => {
  //   this.setState({
  //     counterVal: this.state.counterVal + 1
  //   });
  // };
  // onDown = () => {
  //   this.setState({
  //     counterVal: this.state.counterVal - 1
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h3>{this.props.counterVal}</h3>
        <button onClick={this.props.onUp}>Up</button>
        <button onClick={this.props.onDown}>Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterVal: state.counterVal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUp: () => dispatch({ type: "ON_UP" }),
    onDown: () => dispatch({ type: "ON_DOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
