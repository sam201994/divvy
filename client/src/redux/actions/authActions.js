import store from '../../redux/store';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { updateFriendList } from './friendsActions.js';

export function loggedInName(myName) {
  store.dispatch({
    type: 'UPDATE_MYNAME',
    payload: { myName }
  });
}

export function handleSignin (e) {
   
  e.preventDefault();
  const username = e.target.querySelector('[name="username"]').value;
  const password = e.target.querySelector('[name="password"]').value;



  axios.get('/users/signin', {
    params: {
      username: username,
      password: password
    }
  })
  .then((res) => {
    localStorage.setItem('token', res.data.token);
    if (res.data.success) {
        loggedInName(username); 
        updateFriendList(username);
       browserHistory.push('/friends');
    } else {
        setError(res.data.error);
    }
  })
  .catch("ERROR");

}

export function handleSignup (e) {

  e.preventDefault();
  const name = e.target.querySelector('[name="name"]').value;
  const username = e.target.querySelector('[name="username"]').value;
  const password = e.target.querySelector('[name="password"]').value;
  const confirmPassword = e.target.querySelector('[name="confirm_password"]').value;
  
  loggedInName(username); 
  updateFriendList(username);

  if (password !== confirmPassword) {
    setError("passwords do not match");
  } else {
    axios.post('/users/create', {
      name: name,
      username: username,
      password: password
    }) 
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      if (res.data.success) {
          loggedInName(username); 
          updateFriendList(username);
          browserHistory.push('/friends');
      } else {
        setError(res.data.error);
      }
    })
    .catch("ERROR");
  }

}

//verifies if its authenticated or not
export function requireAuth(nextState, replace, blah) {
  
  blah();
  return axios.get('/users/auth', {
    headers: { token: localStorage.token || null }
  })
  .then((res) => {
    blah();
  })
  .catch((err) => {
    replace({
      pathname: '/auth',
      state: {
      nextPathname: nextState.location.pathname
      }
    });
    blah();
  });
}
function blah() {
  console.log("I am uselss blah");
}

export function setError (err) {
    store.dispatch({
    	type: 'UPDATE_ERROR',
    	payload: { err }
  	});
}
