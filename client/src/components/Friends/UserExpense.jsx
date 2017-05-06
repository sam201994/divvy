import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';


const UserExpense = ({ username, name, score, friends }) => {

  return (
    <div>
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

// {JSON.stringify(friends.friendsList)}
