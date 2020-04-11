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
    const skillList = [
      {
        id: 'html',
        name: 'HTML',
        exp: '業務経験 / 自己学習',
      },
      {
        id: 'css',
        name: 'CSS',
        exp: '業務経験 / 自己学習',
      },
      {
        id: 'js',
        name: 'JavaScript',
        exp: '業務経験 / 自己学習',
      },
      {
        id: 'react',
        name: 'React.js',
        exp: '自己学習',
      },
      {
        id: 'redux',
        name: 'Redux.js',
        exp: '自己学習',
      },
      {
        id: 'jquery',
        name: 'jQuery',
        exp: '業務経験 / 自己学習',
      },
      {
        id: 'node',
        name: 'Node.js',
        exp: '自己学習',
      },
      {
        id: 'aws',
        name: 'AWS',
        exp: ' 自己学習',
      },
      {
        id: 'git',
        name: 'Git',
        exp: '自己学習',
      },
      {
        id: 'github',
        name: 'GitHub',
        exp: '自己学習',
      },
      {
        id: 'svn',
        name: 'Subversion (CVN)',
        exp: '業務経験',
      },
      {
        id: 'linux',
        name: 'Linux',
        exp: '業務経験 / 自己学習',
      },
    ];

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
                  <Link to='/Aboutme/Skills'>Skills</Link>
                </li>
              </ul>
              <div className="content-area">
                <Route exact path='/Aboutme' component={Profile} />
                <Route
                  exact path='/Aboutme/Skills'
                  render={props => <Skills skillList={skillList} {...props} />}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Aboutme;