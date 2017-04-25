import store from '../../redux/store';
import axios from 'axios';


export function updateFriendList() {
	

	
	axios.get('/getfriends')
  	.then((res) => {
  		const friends = res.data;
  		store.dispatch({
    		type: 'UPDATE_FRIENDLIST',
    		payload: { friends }
  		});

	})
  	.catch("ERROR");

}


