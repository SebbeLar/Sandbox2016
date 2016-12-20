import React from 'react';
import { Link } from 'react-router';

export default function User(props) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Email: {props.email}</div>
      <Link to={`/user/${props.user}`} user={props.name}>Info</Link>
    </div>
  );
}

User.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  user: React.PropTypes.number
};
