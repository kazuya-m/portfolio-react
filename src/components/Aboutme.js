import React from 'react';
import Skills from './Skills';
import Profile from './Profile';
import {BrowserRouter as Router, Link, Route,} from "react-router-dom";

class Aboutme extends React.Component {
  render() {
    return(
      <Router>
        <div className="aboutme-wrapper wrapper">
          <div className="container">
            <div className="heading">
              <h2>About Me</h2>
            </div>
            <div className="profile-area">
              <ul id="aboutme-tab">
                <li><Link to='/Aboutme'>Profile</Link></li>
                <li><Link to='/Aboutme/Skills'>Skills</Link></li>
              </ul>
              <div className="content-area">
                <Route exact path='/Aboutme' component={Profile} />
                <Route exact path='/Aboutme/Skills' component={Skills} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Aboutme;