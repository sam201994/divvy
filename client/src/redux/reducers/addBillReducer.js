const defaults = {
  usersAdded:{},
  billDiscription:'' 
};

export default function authReducer(state = defaults, action) {
  switch(action.type) {
    case 'ADD_USER': {
    	const newState = Object.create(state);
      
    	newState.usersAdded[action.payload.addUser] = 0
      console.log(newState.usersAdded);
      return newState;
    }
    case 'UPDATE_AMOUNT_PAID': {
      const newState = Object.create(state);

      newState.usersAdded[action.payload.username] = action.payload.amountPaid
      
      return newState;
    }
    case 'UPDATE_BILL_DISCRIPTION': {
      const newState = Object.create(state);

      newState.billDiscription = action.payload.billDiscription
      
      return newState;
    }
  }
  return state;
};

//{...state} does'nt work. needs a loader;
