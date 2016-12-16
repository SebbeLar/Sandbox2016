import React from 'react';

export default function User(props) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Email: {props.email}</div>
    </div>
  );
}

User.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string
};
