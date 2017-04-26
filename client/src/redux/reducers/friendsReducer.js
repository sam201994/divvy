const defaults = {
  friendsList: '',
  you_owe: 'US$ 0.00',
  you_are_owed: 'US$ 0.00',
  total_balance: 'US$ 0.00'
};

export default function friendsReducer(state = defaults, action) {
	switch(action.type) {
	  case 'UPDATE_FRIENDLIST': {
	  	const newState = Object.create(state);
	  	newState.friendsList = action.payload.friends.friends;
	    return newState;
	  }
	   case 'UPDATE_BALANCE': {
	  	const newState = Object.create(state);
	  	newState.you_owe = action.payload.balance.you_owe
	  	newState.you_are_owed = action.payload.balance.you_are_owed
	  	newState.total_balance = action.payload.balance.total_balance
	    return newState;
	  }
	}

	return state;
};