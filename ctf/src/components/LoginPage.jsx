import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-section">
          <h1>Byte Buster's Club</h1>
          <h2>Learn CyberSecurity</h2>
          <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div className="right-section">
          <h2>Start Hacking !!!</h2>
          <br />
          <p>
            Master Cybersecurity. This path will prepare you to build your base
            strong in cyber security.
          </p>
          <br />
          <form>
            <div className="input-group">
              <input type="text" placeholder="Team ID" required />
              <i className="icon-user"></i>
            </div>
            <br />
            <div className="input-group">
              <input type="password" placeholder="Password" required />
              <i className="icon-eye"></i>
            </div>
            <br />
            {/* <p className="register-link">Register Instead?</p> */}
            <button type="submit" className="start-button">
              Start Hacking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

