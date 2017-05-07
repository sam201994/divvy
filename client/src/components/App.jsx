/* moddules */
import React from 'react';
import ReactDOM from 'react-dom';

/* files */
import store from '../redux/store';

/* Components */
import Nav from './Nav.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
