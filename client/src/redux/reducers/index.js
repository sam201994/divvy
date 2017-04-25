import { combineReducers } from 'redux';
import friends from './friendsReducer';
// import settings from './settingsReducer';
// import addBill from './addBillReducer';
import auth from './authReducer';

export default combineReducers({
 auth,
 friends
});
// export default combineReducers({
//   freinds,
//   settings,
//   addBill
// });
