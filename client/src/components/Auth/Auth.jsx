import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

export default class Auth extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    };

    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.routeToFriends = this.routeToFriends.bind(this);
    this.setError = this.setError.bind(this);
  }

  render () {
    return (
      <div id="authBody">
        <div id="authContainer">
          <div id="authHeader">
            <h1>Welcome to <span className="beautify">Divvy</span></h1>
          </div>
          <div id="authContent">
            {React.cloneElement(this.props.children, {
              error: this.state.error,
              signin: this.handleSignin,
              signup: this.handleSignup
            })}
          </div>
          <div id="authNav">
            <Link to="/auth/signin">
              <button>Signin</button>
            </Link>
            <Link to="/auth/signup">
              <button>Signup</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  handleSignin (e) {
    e.preventDefault();
  
    console.log("after signing In");
  }

  handleSignup (e) {
  
    console.log("after sign up")
  }


  setError (err) {
    this.setState({
      error: err.response.data
    });
  }
}
s