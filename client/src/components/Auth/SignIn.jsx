/* React */
import React, {Component} from 'react';

const Signin = (props) => (
  <div id="signin">
    <h2>Log in to Begin Divvy</h2>
    <form name="signinForm" onSubmit={props.signin}>
      <div>
        <input type="text" name="username" placeholder="username" required />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <button type="submit" className="btn">Signin</button>
    </form>
    <div className="error-text">{props.error}</div>
  </div>
);

export default Signin;