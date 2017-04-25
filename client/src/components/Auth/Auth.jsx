/* React and React-Router */
import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

/* components */
import  Signin from './Signin.jsx';
import Signup from './Signup.jsx';


const Auth = ({ auth }) => (

    <div id="authContainer">
      <div id="authHeader">
        <h1>Welcome to <span className="beautify">Divvy</span></h1>
      </div>
      <div id="authNav">
        <Link to="/auth/signin">
          Sign in 
        </Link>
        <Link to="/auth/signup">
          Sign up
        </Link>
      </div>
    </div>

);

export default Auth;
