/* modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

/* files */
import { handleSignin, setError } from '../../redux/actions/authActions.js';
import store from '../../redux/store';

class Signin extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount(){
    setError();
  }
  render() {
    const { auth } = this.props;
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
}

export default connect((store) => {
  return {
    auth: store.auth
  };
})(Signin);


