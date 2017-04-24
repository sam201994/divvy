/* React */
import React, {Component} from 'react';


const Signup = (props) => (
  <div id="signup">
    <h2>Manage your expenses</h2>
    <form name="signupForm" onSubmit={props.signup}>
      <div>
        <input type="text" name="name" placeholder="name" required />
      </div>
      <div>
        <input type="text" name="username" placeholder="username" required />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <div>
        <input type="password" name="confirm_password" placeholder="Confirm Password" required />
      </div>
      <button type="submit" className="btn">Signup</button>
    </form>
    <div className="error-text">{props.error}</div>
  </div>
);
export default Signup;
