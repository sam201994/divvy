import store from '../../redux/store';
import axios from 'axios';
import store from '../store.js'
import { updateFriendList } from './friendsActions.js';

export function updateScore(username, amount){
         console.log(username, amount, "inside updatescore funtion")
  store.dispatch({
    type: 'UPDATE_SCORE',
    payload: { username: username, amount: amount }
  });

}
export function addUsersToBill(addUser) {
	console.log("inside addusers to bull", addUser);
  store.dispatch({
    type: 'ADD_USER',
    payload: { addUser }
  });
}

export function createBill(usersAdded, billDiscription, totalAmount) {
	console.log("inside create bill",usersAdded, billDiscription);


  axios.post('/createBill', {
      discription: billDiscription,
      totalAmount: 36,
      members: { shrd: 8, sam: 26, soi: 2},
      division: [['shrd', 'sam',4],['soi','sam',10]]
  }) 
  .then((res) => {
    if (res.data.success) {
      // loggedInName(username); 
      // updateFriendList(username);
      // browserHistory.push('/friends');
      getBills("sam")
      console.log("bill created");
    } else {
      setError(res.data.error);
    }
  })
  .catch("ERROR");
  

 
}

export function AddBillToUser(billID, username) {

  store.dispatch({
    type: 'ADD_BILL_IDS',
    payload: { billID: billID, username: username }
  });
}


export function updateDiscription(e) {
 
 const billDiscription = e.target.value;
  // value

  store.dispatch({
    type: 'UPDATE_BILL_DISCRIPTION',
    payload: { billDiscription }
  });
}

export function amountPaid(e) {
  const username =  e.target.name
 const amountPaid = e.target.value;
  // value

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

    bb(myName);
  })
  .catch("ERROR");

}

function bb(myName) {
 
  const friendsList = store.getState().friends.friendsList;

  const allBills = store.getState().addBill.allBills;

console.log("freindlist before chaing the score: ", friendsList, allBills);

    Object.keys(allBills).forEach(function(item) {
      //if(item.members[myName]) {
        

        allBills[item].division.forEach(function(d) {

          if(d[0] === myName) {     
            AddBillToUser(item, d[1])
            updateScore(d[1],friendsList[d[1]].score + d[2]);
          } else if(d[1] === myName) {
                  AddBillToUser(item, d[0])
            updateScore(d[0], friendsList[d[0]].score - d[2]);
          }
        })
      //}
    })
}


