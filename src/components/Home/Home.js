import React, { Component } from 'react';
import logo from './logo.svg';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Electron = <span role="img" aria-label="love">😍</span></h2>
        </div>
        <p className="App-intro">
          Version: 0.1.0
        </p>
        <button onClick={()=>this.props.router.push("/login")}>Back</button>
      </div>
    );
  }
}

export default Home;