import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';
import { createBill, amountPaid, updateDiscription } from '../../redux/actions/addBillActions.js';

const AddedUsers = ({ addBill }) => {

  return (
    <div>
    	<input type="text" placeholder="Discription" onChange={updateDiscription}/>
	  	{
            	Object.keys(addBill.usersAdded).map((key, index) => {
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
                
              })
          }
         <button 
         	className="btn" 
         	onClick={createBill.bind(null,addBill.usersAdded,addBill.billDiscription)}>create bill</button>

	   
    </div>
  )
}


export default connect((store) => {
  return {
    addBill : store.addBill
  };
})(AddedUsers);


// class AddedUsers extends React.Component  {

// 		  constructor(props) {

//     super(props);
//     console.log("hello i am in addedUsersa")
//   }

	
// 	render (){
// 		  return (
// 		    <div>
				
			   
// 		    </div>
// 		  )
// 	}

// }



// {JSON.stringify(friends.friendsList)}
