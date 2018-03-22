import React, { Component } from 'react';
import '../../styles/main.css'
class Full extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Full;
