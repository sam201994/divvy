/* modules */
import React, {Component} from 'react';

/* files */
import store from '../../redux/store';
import { connect } from 'react-redux';
import { updateCurrentUser } from '../../redux/actions/friendsActions.js';

function displayBalance (score) {
  let balance = "";
  if(score === 0 ){
    balance = "Setteled up"
  } else if(score >0) {
    balance = "you owe " + score;
  } else {
    score = score+"";
    balance = "owes you " + score.slice(1);
  }
  return balance
}

const UserExpense = ({ username, name, score, friends }) => {

  return (
    <div onClick={updateCurrentUser.bind(null, username)}>
      <div>
        {username}
        <div>
        {name}
        </div>
      </div>
      <div>
        <span>{displayBalance(score)}</span>
      </div>
      <div>-------------------------------------</div>
    </div>
  )
} 

export default connect((store) => {
  return {
    friends : store.friends
  };
})(UserExpense);






