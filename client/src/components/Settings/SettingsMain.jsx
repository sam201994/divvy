/* React and React-Router */
import React from 'react';
import {Link} from 'react-router';

/* other files */
import authHelpers from '../Auth/auth-helpers.js';

const SettingsMain = () => {
  return (
    <div>
       <Link to="auth">
          <button onClick={authHelpers.logout}>Log Out</button>
        </Link>
    </div>
  )
}

export default SettingsMain;