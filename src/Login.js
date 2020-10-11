import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__back">
        <div className="login__logo">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8859/cdf7ad61-0549-4442-a349-d17717288163.svg"
            alt="messenger icon"
          />
          <h1>Reboot</h1>
        </div>

        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
