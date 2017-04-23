/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


const Nav = () => (
  <div>
    <h2>DIVVY</h2>
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
      <Link to="auth">
        <button>Auth</button>
      </Link>
    </nav>
  </div>
);

export default Nav;
