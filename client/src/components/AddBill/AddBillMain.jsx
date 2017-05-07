/* modules */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* files */
import store from '../../redux/store';
import { setDefaults_bill } from '../../redux/actions/addBillActions.js';
import { setError } from '../../redux/actions/authActions.js';

/* components */
import Users from './Users.jsx'

class AddBillMain extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount(){
    setDefaults_bill();
    setError();
  }
  render() {
    const { friends } = this.props;
    return (
      <div>
        <div>
          {Object.keys(friends.friendsList).map((key, index) => {
              return (
                <Users
                 key={index} 
                 username={key}
                 />
              );
          })}
        </div>
        <div>
          <Link to="next">
            <button>next</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    friends : store.friends
  };
})(AddBillMain);


    