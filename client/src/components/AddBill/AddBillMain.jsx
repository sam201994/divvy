/* React and React-Router */
import React, {Component} from 'react';
import store from '../../redux/store';
import { connect } from 'react-redux';
import Users from './Users.jsx'
import {Link, browserHistory} from 'react-router';



const AddBillMain = ({ friends }) => {
  return (
     <div>
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

    