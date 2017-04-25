const defaults = {
  friendsList: '',
};

export default function friendsReducer(state = defaults, action) {
	switch(action.type) {
	  case 'UPDATE_FRIENDLIST': {
	  	const newState = Object.create(state);
	  	newState.friendsList = action.payload.friends.friends;
	    return newState;
	  }
	}
	return state;
};