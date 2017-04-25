/* React and React Router */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

/* other modules */
import axios from 'axios';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/store';


/* Components */
import App from './components/App.jsx';
import AddBill from './components/AddBill/AddBillMain.jsx';
import Friends from './components/Friends/FriendsMain.jsx';
import Settings from './components/Settings/SettingsMain.jsx';
import Auth from './components/Auth/Auth.jsx';
import Signin from './components/Auth/Signin.jsx';
import Signup from './components/Auth/Signup.jsx';

const Root = props => (
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/auth" component={Auth}> 
    </Route>
 	 <Route path="/" component={App} onEnter={requireAuth}>
      <IndexRedirect to="/Auth" />
	    <Route path="/friends" component={Friends} onEnter={requireAuth}/>
	    <Route path="/addBill" component={AddBill} onEnter={requireAuth}/>
	    <Route path="/settings" component={Settings} onEnter={requireAuth}/>
    </Route>
 </Router>
 </Provider>
);
ReactDOM.render(<Root />, document.getElementById('app'));

function blah () {

  console.log("I'm here to make requireAuth asynchronous!");
}



//verifies the user's token serverside.
function requireAuth(nextState, replace, blah) {
  console.log("here inside require auth")
  
  blah();
  return axios.get('/users/auth', {
    headers: { token: localStorage.token || null }
  })
  .then((res) => {
    console.log("instead of blah: ",res);
    blah();
  })
  .catch((err) => {
    console.log("INSIDE REQUIRE AUTH: nextState.location ",nextState.location );
    replace({
      pathname: '/auth',
      state: {
        nextPathname: nextState.location.pathname
      }
    });
    blah(); //I also do nothing!
  });
}


