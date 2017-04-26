import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';
import TotalExpenses from './TotalExpenses.jsx'
import UserExpense from './UserExpense.jsx'

const FriendsMain = ({ friends }) => {
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
                  name={friends.friendsList[key].name}/>
                );
	            
	          })
	      	}
    	</div>
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(FriendsMain);

// {JSON.stringify(friends.friendsList)}