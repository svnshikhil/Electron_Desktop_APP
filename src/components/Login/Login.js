import React, { Component } from 'react';
class Login extends Component {
  render() {
    return (
      <div className="App">
        Login
       <button onClick={() => this.props.router.push("/home")}>home</button>
      </div>
    );
  }
}

export default Login;