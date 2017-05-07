/* modules */
import axios from 'axios';
import { browserHistory } from 'react-router';
/* files */
import store from '../store.js'
import { updateFriendList } from './friendsActions.js';
import { setError } from './authActions.js'

export function updateScore(username, amount){
  store.dispatch({
    type: 'UPDATE_SCORE',
    payload: { username: username, amount: amount }
  });
}

export function addUsersToBill(addUser) {
  store.dispatch({
    type: 'ADD_USER',
    payload: { addUser }
  });
}

export function setDefaults_bill() {
   store.dispatch({
      type: 'SET_DEFAULTS_BILL'
    })
}

export function updateToatalAmount(e) {
  const amount = e.target.value
  store.dispatch({
    type: 'UPDATE_TOTALAMOUNT',
    payload: { amount }
  })
}

export function createBill(usersAdded, billDiscription, totalAmount) {

  const err = checkError(usersAdded,billDiscription,totalAmount);
  if(err.isError) {
    console.log("here inside this");
    setError(err.error);
  }
  else {
    axios.post('/createBill', {
        discription: billDiscription,
        totalAmount: 36,
        members: { shrd: 8, sam: 26, soi: 2},
        division: [['shrd', 'sam',4],['soi','sam',10]]
    }) 
    .then((res) => {
      if (res.data.success) {
        getBills(store.getState().auth.myName)
        setDefaults_bill();
        browserHistory.push('/friends');
      } else {
        console.log("inside create bill error: ", res.data);
        setError(res.data.error);
      }
    })
    .catch("ERROR");
  }
}

function checkError(usersAdded,billDiscription,totalAmount) {
  if(!billDiscription) {
    return {
      isError: true,
      error: "Bill discription Empty"
    }
  }
  if(!usersAdded) {
    return {
      isError: true,
      error: "users not added to the bill"
    }
  }
  if(!totalAmount) {
     return {
      isError: true,
      error: "Total amount missing"
    }
  }
  let sum = 0; 
  Object.keys(usersAdded).forEach(function(item){
      sum = sum + parseFloat(usersAdded[item])
  })
  console.log("total sum: ", sum);
  if(sum !== parseFloat(totalAmount)) {
    return {
      isError: true,
      error: "Payment values do not add up to total cost"
    }
  }
  return {
    isError: false,
    error: "bill created"
  }

}

export function AddBillToUser(billID, username) {
  store.dispatch({
    type: 'ADD_BILL_IDS',
    payload: { billID: billID, username: username }
  });
}


export function updateDiscription(e) {
 const billDiscription = e.target.value;
  store.dispatch({
    type: 'UPDATE_BILL_DISCRIPTION',
    payload: { billDiscription }
  });
}

export function amountPaid(e) {
  const username =  e.target.name
  const amountPaid = e.target.value;
  store.dispatch({
    type: 'UPDATE_AMOUNT_PAID',
    payload: { username: username, amountPaid: amountPaid }
  });
}

export function getBills(myName) {
  store.dispatch({
      type: 'SET_DEFAULT_SCORE',
  });

  axios.get('/getBills')
  .then((res) => {
    const bills = res.data.allBills;
    store.dispatch({
      type: 'UPDATE_BILLS',
      payload: { bills }
    });
    return bills;
  })
  .then((res) => {
    calculateBills(myName);
  })
  .catch("ERROR");
}

function calculateBills(myName) {
 
  const friendsList = store.getState().friends.friendsList;
  const allBills = store.getState().addBill.allBills;

  Object.keys(allBills).forEach(function(item) {
    allBills[item].division.forEach(function(d) {
      if(d[0] === myName) {     
        AddBillToUser(item, d[1])
        updateScore(d[1],friendsList[d[1]].score + d[2]);
      } else if(d[1] === myName) {
        AddBillToUser(item, d[0])
        updateScore(d[0], friendsList[d[0]].score - d[2]);
      }
    })  
  })

}


