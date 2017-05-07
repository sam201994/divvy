/* modules */
import React, {Component} from 'react';
import { connect } from 'react-redux';

/* files */
import { addUsersToBill } from '../../redux/actions/addBillActions.js';
import store from '../../redux/store';

const Users = ({ username, friends }) => {

  return (
    <div>
	   {username}
	   <button onClick={addUsersToBill.bind(null,username)}>+</button>
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(Users);
