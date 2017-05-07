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
      <div>
        <div>
          <h2>
            {friends.currentUser}
          </h2>
        </div>

        <div>
            {friends.friendsList[friends.currentUser].bills.map((id) => {
              return (
                <div key={id}>
                    {bills.allBills[id].discription}
                  <div>total amount {bills.allBills[id].totalAmount}</div>
                  <div>----------------------------</div>
                </div>
              )
            })}
        </div>

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

