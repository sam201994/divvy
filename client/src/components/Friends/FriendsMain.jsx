import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';
import TotalExpenses from './TotalExpenses.jsx'
import UserExpense from './UserExpense.jsx'
import { getBills, updateScore } from '../../redux/actions/addBillActions.js';

class FriendsMain extends React.Component { 

    constructor(props) {
    super(props);
    console.log("INSIDE CONSTRUTOR OF FRINES MAIN WHERE ALL BILLS IS CALLED");
        getBills(this.props.auth.myName);
   

  }


  render() {
    const { friends } = this.props;
    return (
    <div>
       <TotalExpenses />
       <div>
          {
            Object.keys(friends.friendsList).map((key, index) => {
                return (
                  <UserExpense 
                  key={index} 
                  username={key} 
                  name={friends.friendsList[key].name}
                  score={friends.friendsList[key].score}
                  />

                );
              
            })
          }
      </div>
    </div>
  )
  }
}
// const FriendsMain = ({ friends }) => {
//   return (
//     <div>
//        <TotalExpenses />
//        <div>
// 	        {
// 	        	Object.keys(friends.friendsList).map((key, index) => {
//                 return (
//                   <UserExpense 
//                   key={index} 
//                   username={key} 
//                   name={friends.friendsList[key].name}/>

//                 );
	            
// 	          })
// 	      	}
//     	</div>
//     </div>
//   )
// }

export default connect((store) => {
  return {
    friends : store.friends,
    bills: store.addBill,
    auth: store.auth
  };
})(FriendsMain);

// {JSON.stringify(friends.friendsList)}