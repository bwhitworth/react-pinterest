import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <h4>React Pinterest</h4>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {
                  authed ? <button className="nav-link btn btn-warning" onClick={this.logMeOut}>Logout</button>
                    : ''
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
