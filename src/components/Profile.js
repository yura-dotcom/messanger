import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from 'prop-types';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="avatar">
        <img src={user.picture} alt={user.name} />
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
    )
  );
};

Profile.propTypes = {

  user: PropTypes.object,
  isAuthenticated: PropTypes.bool, 
  isLoading: PropTypes.bool,

}

export default Profile;