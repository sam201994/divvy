/* modules */
import React, {Component} from 'react';
import { connect } from 'react-redux';
 
/* files */
import { createBill, amountPaid, updateDiscription, updateToatalAmount } from '../../redux/actions/addBillActions.js';
import store from '../../redux/store';

const AddedUsers = ({ addBill, auth }) => {

  return (
    <div>
    	<input type="text" placeholder="Discription" onChange={updateDiscription} required/>
      <input type="number" placeholder="Toatal Amount" onChange={updateToatalAmount} required/>
	  	{Object.keys(addBill.usersAdded).map((key, index) => {
        return (
        	<div key={key}>
            <span>{key}</span> 
            <input 
              type="number" 
              name={key}  
              placeholder="0.0$" 
              onChange={amountPaid}/>
          </div>
        );
      })}
     <button 
       	className="btn" 
       	onClick={createBill.bind(null,addBill.usersAdded,addBill.billDiscription, addBill.current_totalAmount)}>
        create bill
      </button>
      <div>{auth.authError}</div>
    </div>
  )
}

export default connect((store) => {
  return {
    addBill : store.addBill,
    auth: store.auth
  };
})(AddedUsers);

