/* modules */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* files */
import store from '../../redux/store';

/* components */
import Users from './Users.jsx'

const AddBillMain = ({ friends }) => {
  return (
    <div>
      <div>
        {Object.keys(friends.friendsList).map((key, index) => {
            return (
              <Users
               key={index} 
               username={key}
               />
            );
        })}
      </div>
      <div>
        <Link to="next">
          <button>next</button>
        </Link>
      </div>
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(AddBillMain);

    