import React from 'react';
import Skills from './Skills';
import Profile from './Profile';
import {BrowserRouter as Router, Link, Route, NavLink } from "react-router-dom";

class Aboutme extends React.Component {
  // constructor(props) {
  //   // const currentPath = window.location.pathname;
  //   super(props)
  //   // this.state = {
  //   //   pathName: currentPath
  //   // };
  // }

  //  handleClickedTab = tabId => {
  //   console.log('yes');
  //   const profilePath = "/Aboutme";
  //   const skillsPath = "/Aboutme/Skills";
  //   if (tabId === "profile" && this.state.pathName !== profilePath) { 
  //     this.setState({pathName: {profilePath}});
  //   } else if (tabId === "skills" && this.state.pathName !== skillsPath) {
  //     this.setState({pathName: {skillsPath}});      
  //   }
  // }
  
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
    
    // const profilePath = "/Aboutme";
    // const skillsPath = "/Aboutme/Skills";
    // let profileActive;
    // let skillsActive;

    // if (this.state.pathName === {profilePath}) {
    //   profileActive = "active";
    // } else if (this.state.pathName === {skillsPath}) {
    //   skillsActive = "active"
    // }

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
                  // onClick={() => {this.handleClickedTab("profile")}} 
                  // className={profileActive}
                  >
                  <NavLink to='/Aboutme' activeClassName="active">Profile</NavLink>
                </li>
                <li 
                  // onClick={() => {this.handleClickedTab("skills")}} 
                  // className={skillsActive}
                  >
                  <NavLink to='/Aboutme/Skills' activeClassName="active">Skills</NavLink>
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