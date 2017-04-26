import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';


const UserExpense = ({ friends }) => {
  return (
    <div>
	   hello
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(UserExpense);

// {JSON.stringify(friends.friendsList)}
