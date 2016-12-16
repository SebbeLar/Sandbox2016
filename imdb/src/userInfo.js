import React from 'react';
import Denied from './denied';
import User from './user';

export default class UserInfo extends React.Component {
  render() {
    const { id, name, email } = this.props.data;
    console.log(id);
    let display = null;
    if (id < 4) {
      console.log('No Priv!');
      display = <Denied/>;
    } else if (id >= 4) {
      display = <User name={name} email={email}/>;
    } else {
      display = 'Please click on a user';
    }
    return (
      <div>
        <h3>User Info</h3>
        {display}
      </div>
    );
  }
}

UserInfo.propTypes = {
  data: React.PropTypes.object,
  name: React.PropTypes.string,
  email: React.PropTypes.string
};
