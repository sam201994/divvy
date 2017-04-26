import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';


const Users = ({ username, friends }) => {

  return (
    <div onClick={oal.bind(null)}>
	   {username}
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(Users);

// {JSON.stringify(friends.friendsList)}
function oal () {
	console.log("holapola")
}