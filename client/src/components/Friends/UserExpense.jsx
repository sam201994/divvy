import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';
import { updateCurrentUser } from '../../redux/actions/friendsActions.js';


const UserExpense = ({ username, name, score, friends }) => {

  return (
    <div onClick={updateCurrentUser.bind(null, username)}>
	   {username + name}
	   <span>{score}</span>
	   

    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(UserExpense);

