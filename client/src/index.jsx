/* React and React Router */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

/* redux */
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

/* other files */
import { requireAuth } from './redux/actions/authActions.js';


const Root = props => (
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/auth" component={Auth}/> 
    <Route path="/auth/signin" component={Signin}/> 
    <Route path="/auth/Signup" component={Signup}/> 
    
 	 <Route path="/" component={App}>
      <IndexRedirect to="/auth" />
	    <Route path="/friends" component={Friends} onEnter={requireAuth}/>
	    <Route path="/addBill" component={AddBill} onEnter={requireAuth}/>
	    <Route path="/settings" component={Settings} onEnter={requireAuth}/>
    </Route>
 </Router>
 </Provider>
);
ReactDOM.render(<Root />, document.getElementById('app'));




