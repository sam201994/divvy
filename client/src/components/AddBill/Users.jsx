import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';
import { addUsersToBill } from '../../redux/actions/addBillActions.js';

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

// {JSON.stringify(friends.friendsList)}
