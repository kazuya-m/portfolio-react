import React from 'react';
import Skills from './Skills';
import Profile from './Profile';
import {BrowserRouter as Router, Link, Route,} from "react-router-dom";

class Aboutme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isProfileActive: true,
      isSkillsActive: false
    };
  }
  
  handleProfileClickedTab = () => {
    if (!this.state.isProfileActive) { 
      this.setState({isProfileActive: true});
      this.setState({isSkillsActive: false});
    }
  }

  handleClickedSkillsTab = () => {
    if (!this.state.isSkillsActive) { 
      this.setState({isProfileActive: false});
      this.setState({isSkillsActive: true});
    }
  }
    
  render() {
    let profileActive;
    let skillsActive;
    if (this.state.isProfileActive) {
      profileActive = "active";
    } else if (this.state.isSkillsActive) {
      skillsActive = "active";
    }
    return(
      <Router>
        <div className="aboutme-wrapper wrapper">
          <div className="container">
            <div className="heading">
              <h2>About Me</h2>
            </div>
            <div className="profile-area">
              <ul id="aboutme-tab">
                <li 
                  onClick={this.handleProfileClickedTab} 
                  className={profileActive}>
                  <Link to='/Aboutme'>Profile</Link>
                </li>
                <li 
                  onClick={this.handleClickedSkillsTab} 
                  className={skillsActive}>
                  <Link to='/Aboutme/Skills'>Skills</Link></li>
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