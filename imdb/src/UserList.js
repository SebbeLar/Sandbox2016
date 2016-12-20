import React, { Component } from 'react';
import UserInfo from './userInfo';

class UserList extends Component {
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
      <div className="UserList">
        { this.state.users.map((user) => {
          return (
          <div key={user.id} onClick={() => this.getUser(user)}>{user.name}</div>
          );
        }) }
        <UserInfo data={this.state.activeUser} />
      </div>
      );
  }
}

export default UserList;
