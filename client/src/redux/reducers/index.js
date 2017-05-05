import { combineReducers } from 'redux';
import friends from './friendsReducer';
// import settings from './settingsReducer';
import addBill from './addBillReducer';
import auth from './authReducer';

export default combineReducers({
 auth,
 friends,
 addBill
});
// export default combineReducers({
//   freinds,
//   settings,
//   addBill
// });
console.log("inside main reducer",addBill.usersAdded)