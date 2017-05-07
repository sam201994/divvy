/* modules */
import React, {Component} from 'react';
import { connect } from 'react-redux';

/* files */
import store from '../../redux/store';
import { updateCurrentUser } from '../../redux/actions/friendsActions.js';


const UserBills = ({ friends, bills }) => {

  return (
    <div>
      <div onClick={updateCurrentUser.bind(null,"")}>back</div>
      <p>
        {friends.currentUser}
      </p>
      <div>
          {friends.friendsList[friends.currentUser].bills.map((id) => {
            return (
              <div key={id}>
                <h3>
                  {bills.allBills[id].discription}
                </h3>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends,
    bills : store.addBill
  };
})(UserBills);

