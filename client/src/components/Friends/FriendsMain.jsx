import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';



const FriendsMain = ({ friends }) => {
  return (
    <div>
      {JSON.stringify(friends.friendsList)}
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(FriendsMain);