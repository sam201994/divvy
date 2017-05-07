/* modules */
import { combineReducers } from 'redux';

/* files */
import friends from './friendsReducer';
import addBill from './addBillReducer';
import auth from './authReducer';
// import settings from './settingsReducer';

export default combineReducers({
 auth,
 friends,
 addBill
});
