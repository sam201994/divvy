const defaults = {
  friendsList: '',
  you_owe: 'US$ 0.00',
  you_are_owed: 'US$ 0.00',
  total_balance: 'US$ 0.00',
  currentUser: ''
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

	  case 'UPDATE_SCORE': {
	      const newState = Object.create(state);
	      newState.friendsList[action.payload.username].score = action.payload.amount
	      return newState;
	  }
	  
	  case 'SET_DEFAULT_SCORE': {
	    const newState = Object.create(state);
	    for(let key in newState.friendsList) {
	    	newState.friendsList[key].score = 0;
	    }
	    return newState;
	  }
	  
	  case 'UPDATE_CURRENT_USER': {
	    const newState = Object.create(state);
	    newState.currentUser = action.payload.currentUser 
	     return newState;
	  }

		case 'ADD_BILL_IDS' : {
	   	const newState = Object.create(state);
	   	newState.friendsList[action.payload.username].bills.push(action.payload.billID)
	   	return newState;
	  }
	}
	return state;
};
