/* modules */
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { connect } from 'react-redux';

/* files */
import store from '../redux/store';
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


