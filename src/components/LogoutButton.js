import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogoutButton.sass';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout" onClick={() => logout({ returnTo: window.location.href })}>
      Log Out
    </button>
  );
};

export default LogoutButton;