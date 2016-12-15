import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeUser: {},
      users: []
    };
    this.getDummy = this.getDummy.bind(this);
    this.getUser = this.getUser.bind(this);
  }
  componentDidMount() {
    this.getDummy();
  }
  getDummy() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        this.setState({
          users: json
        });
      });
  }
  getUser(user) {
    this.setState({
      activeUser: user
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Sebastian Cool Place</h2>
        </div>
        { this.state.users.map((user) => {
          return (
          <div key={user.id} onClick={() => this.getUser(user)}>{user.name}</div>
          );
        }) }
      </div>
      );
  }
}

export default App;
