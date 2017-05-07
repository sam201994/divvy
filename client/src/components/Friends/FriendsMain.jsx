/* modules */
import React, {Component} from 'react';
import { connect } from 'react-redux';

/* files */
import { getBills, updateScore } from '../../redux/actions/addBillActions.js';

/* components */
import TotalExpenses from './TotalExpenses.jsx'
import UserExpense from './UserExpense.jsx'
import UserBills from './UserBills.jsx'


class FriendsMain extends React.Component { 

  constructor(props) {
    super(props);
    getBills(this.props.auth.myName);
  }


  render() {

    const { friends } = this.props;

    if(friends.currentUser === "") {
      return (
        <div>
          <div>
             <TotalExpenses />
          </div>
          <div>
            {Object.keys(friends.friendsList).map((key, index) => {
              return (
                <UserExpense 
                  key={index} 
                  username={key} 
                  name={friends.friendsList[key].name}
                  score={friends.friendsList[key].score}
                  />
              );  
            })}
          </div>
        </div>
      )
    } else {    
      return (
        <div>
            <UserBills />
        </div>
      )
    }
  }

}

export default connect((store) => {
  return {
    friends : store.friends,
    auth: store.auth
  };
})(FriendsMain);
