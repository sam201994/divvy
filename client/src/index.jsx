/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
/*import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/store';*/

/* Components */
import App from './components/App.jsx';
import AddBill from './components/AddBill/AddBillMain.jsx';
import Friends from './components/Friends/FriendsMain.jsx';
import Settings from './components/Settings/SettingsMain.jsx';

const Root = props => (
  <Router history={browserHistory}>
 	 <Route path="/" component={App}>
	    <Route path="/friends" component={Friends}>Friends</Route>
	    <Route path="/addBill" component={AddBill}/>
	    <Route path="/settings" component={Settings}/>
    </Route>
 </Router>
);
ReactDOM.render(<Root />, document.getElementById('app'));
// const Root = props => (
//   <Provider store={store}>
//     <App/>
//   </Provider>
// );
