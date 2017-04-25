/* React and React-Router */
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

/* redux */
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { loggedInName } from '../redux/actions/authActions.js';

const Nav = ({ auth }) => {
  const myName = auth.myName;
  return (
    <div>
      <h2>DIVVY - {myName}</h2>
      <nav>
       <Link to="friends">
          <button>friends</button>
        </Link>
        <Link to="addBill">
          <button>addBill</button>
        </Link>
        <Link to="settings">
          <button>settings</button>
        </Link>
      </nav>
    </div>
  )

};
export default connect((store) => {
  return {
    auth: store.auth
  };
})(Nav);


