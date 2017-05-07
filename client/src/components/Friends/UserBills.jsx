import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';
import { updateCurrentUser } from '../../redux/actions/friendsActions.js';


const UserBills = ({ friends, bills }) => {
  console.log(bills.allBills)
  return (
    <div>
    <div onClick={updateCurrentUser.bind(null,"")}>back</div>
    inside user bills
    <p>
    {friends.currentUser}
    </p>
    <div>
        {
          friends.friendsList[friends.currentUser].bills.map((id) => {

            return (
              <div>
                <h3>
                  {bills.allBills[id].discription}
                </h3>

              </div>

              )
          })
                   
        }
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

// {JSON.stringify(friends.friendsList)}
