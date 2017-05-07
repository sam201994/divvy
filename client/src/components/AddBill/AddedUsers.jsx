/* modules */
import React, {Component} from 'react';
import { connect } from 'react-redux';
 
/* files */
import { createBill, amountPaid, updateDiscription } from '../../redux/actions/addBillActions.js';
import store from '../../redux/store';

const AddedUsers = ({ addBill }) => {

  return (
    <div>
    	<input type="text" placeholder="Discription" onChange={updateDiscription}/>
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
       	onClick={createBill.bind(null,addBill.usersAdded,addBill.billDiscription)}>
        create bill
      </button>
    </div>
  )
}

export default connect((store) => {
  return {
    addBill : store.addBill
  };
})(AddedUsers);

