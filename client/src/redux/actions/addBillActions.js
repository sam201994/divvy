import store from '../../redux/store';
import axios from 'axios';


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
      totalAmount: 33,
      division: [['sam', 'goku',1],['sam','soi',1]]
  }) 
  .then((res) => {
    if (res.data.success) {
      // loggedInName(username); 
      // updateFriendList(username);
      // browserHistory.push('/friends');
      console.log("bill created");
    } else {
      setError(res.data.error);
    }
  })
  .catch("ERROR");
  

 
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

// export function addUsersToBill (e) {
   
//   e.preventDefault();
//   const username = e.target.querySelector('[name="username"]').value;
//   const password = e.target.querySelector('[name="password"]').value;



//   axios.get('/users/signin', {
//     params: {
//       username: username,
//       password: password
//     }
//   })
//   .then((res) => {
//     localStorage.setItem('token', res.data.token);
//     if (res.data.success) {
//         loggedInName(username); 
//         updateFriendList(username);
//        browserHistory.push('/friends');
//     } else {
//         setError(res.data.error);
//     }
//   })
//   .catch("ERROR");

// }
