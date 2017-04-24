/* React and React-Router */
import React from 'react';
import {Link, browserHistory} from 'react-router';

/* other modules */
import axios from 'axios';

/* components */
import  Signin from './Signin.jsx';
import Signup from './Signup.jsx';

import { loggedInName } from '../../redux/actions/authActions.js';

export default class Auth extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.setError = this.setError.bind(this);
  }

  render () {
    let context = this;
    return (
      <div id="authBody">
        <div id="authContainer">
          <div id="authHeader">
            <h1>Welcome to <span className="beautify">Divvy</span></h1>
          </div>
          <div id="authNav">
            <Signin />
            <Signup signup={this.handleSignup}/>
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

    e.preventDefault();
    loggedInName("SMRITI");
    const name = e.target.querySelector('[name="name"]').value;
    const username = e.target.querySelector('[name="username"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    const confirmPassword = e.target.querySelector('[name="confirm_password"]').value;

    if (password !== confirmPassword) {
      this.setState({
        error: 'Passwords do not match'
      });
    } else {
      axios.post('/users/create', {
        name: name,
        username: username,
        password: password
      }) 
      .then((res) => {

        console.log("INSIDE routeToFriends: res ", res);
        console.log("INSIDE routeToFriends: this.props: ", this.props);

        if (res.data.success) {
         browserHistory.push('/friends');
        } else {
          this.setState({
            error: 'An error occurred'
          });
        }

      })
      .catch(this.setError);
    }

  }
  setError (err) {
    this.setState({
      error: err
    });
  }
}
