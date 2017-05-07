const defaults = {
  usersAdded:{},
  billDiscription:'' ,
  allBills:''
};

export default function addBillReducer(state = defaults, action) {
  switch(action.type) {

    case 'ADD_USER': {
    	const newState = Object.create(state);
    	newState.usersAdded[action.payload.addUser] = 0
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

    case 'UPDATE_BILLS': {
      const newState = Object.create(state);
      newState.allBills = action.payload.bills
      return newState;
    }

  }
  return state;
};

//{...state} does'nt work. needs a loader;
