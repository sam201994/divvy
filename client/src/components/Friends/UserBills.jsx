import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';


const UserBills = ({  }) => {

  return (
    <div>
    inside user bills
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(UserBills);

// {JSON.stringify(friends.friendsList)}
