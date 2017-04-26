/* React and React-Router */
import React, {Component} from 'react';
import store from '../../redux/store';
import { connect } from 'react-redux';
import Users from './Users.jsx'

const AddBillMain = ({ friends }) => {
  return (
     <div>
	        {
	        	Object.keys(friends.friendsList).map((key, index) => {
                return (
                  <Users
                   key={index} 
                   username={key}
                   />
                );
	            
	          })
	      	}
    	</div>
  )
}
export default connect((store) => {
  return {
    friends : store.friends
  };
})(AddBillMain);