/* modules */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

/* files */
import { handleSignup, setError } from '../../redux/actions/authActions.js';
import store from '../../redux/store';

class Signup extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount(){
    setError();
  }

  render() {
    const { auth } = this.props;
    return (
      <div id="signup">
        <h2>Manage your expenses</h2>
        <form name="signupForm" onSubmit={handleSignup}>
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
        <div className="error-text">{auth.authError}</div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    auth: store.auth
  };
})(Signup);
