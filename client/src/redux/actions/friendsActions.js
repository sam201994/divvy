import store from '../../redux/store';
import axios from 'axios';


export function updateFriendList(myUserName) {
	
	axios.get('/getfriends',{
    params: {
      myUserName: myUserName 
    }
  })
  .then((res) => {
		let friends = res.data;

		store.dispatch({
  		type: 'UPDATE_FRIENDLIST',
  		payload: { friends }
    });
  })
  .catch("ERROR");

}
export function updateCurrentUser(currentUser) {

    store.dispatch({
      type: 'UPDATE_CURRENT_USER',
      payload: { currentUser }
    });
}


export function updateBalance() {
  
  // axios.get('/getfriends',{
  //   params: {
  //     myUserName: myUserName 
  //   }
  // })
  // .then((res) => {
  //   const friends = res.data;
  //   store.dispatch({
  //     type: 'UPDATE_FRIENDLIST',
  //     payload: { friends }
  //   });
  // })
  // .catch("ERROR");

}

