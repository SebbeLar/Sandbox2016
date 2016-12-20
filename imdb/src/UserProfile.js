import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h1>TEST</h1>
      {props.user}
    </div>
    );
};

UserProfile.propTypes = {
  user: React.PropTypes.number
};

export default UserProfile;
