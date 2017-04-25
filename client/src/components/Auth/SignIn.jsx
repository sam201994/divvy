/* react */
import React from 'react';
import ReactDOM from 'react-dom';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';

/* other files */
import { handleSignin } from '../../redux/actions/authActions.js';

const Signin = ({ auth }) => {
  console.log("inside sing in component")
  return (
    <div id="signin">
      <h2>Log in to Begin Divvy</h2>
      <form name="signinForm" onSubmit={handleSignin}>
        <div>
          <input type="text" name="username" placeholder="username" required />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn">Signin</button>
      </form>
      <div className="error-text">{auth.authError}</div>
  </div>
  )
}

export default connect((store) => {
  return {
    auth: store.auth
  };
})(Signin);