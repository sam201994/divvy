import store from '../../redux/store';
import axios from 'axios';


export function addUsersToBill(addUser) {
	console.log("inside addusers to bull", addUser);
  store.dispatch({
    type: 'ADD_USER',
    payload: { addUser }
  });
}

export function createBill(usersAdded) {
	console.log("inside create bill",usersAdded);

 
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
