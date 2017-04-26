import React, {Component} from 'react';

/* Redux */
import store from '../../redux/store';
import { connect } from 'react-redux';


const TotalExpenses = ({ friends }) => {
  return (
  	<div>
		<div>
		     <span>you owe</span>
		     <p>{friends.you_owe}</p>
		</div>
		 <div>
		     <span>you are owed</span>
		     <p>{friends.you_are_owed}</p>
		</div>
		 <div>
		     <span>total balance</span>
		     <p>{friends.total_balance}</p>
		</div>
    </div>
  )
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(TotalExpenses);

// {JSON.stringify(friends.friendsList)}
