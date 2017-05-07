const defaults = {
  myName:'',
  authError:'' 
};

export default function authReducer(state = defaults, action) {

  switch(action.type) {

    case 'UPDATE_MYNAME': {
    	const newState = Object.create(state);
    	newState.myName = action.payload.myName;
      return newState;
    }
    
    case 'UPDATE_ERROR': {
    	const newState = Object.create(state);
    	newState.authError = action.payload.err;
      return newState;
    }
  }
  return state;
};

//{...state} does'nt work. needs a loader;
