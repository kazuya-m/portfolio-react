import React from 'react';
import Skills from './Skills';
import Profile from './Profile';
import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Aboutme extends React.Component {
  render() {
    function Skillset (id, name, exp) {
     [this.id, this.name, this.exp] = [id, name, exp];
    }
    const amaExp = "自己学習"
    const bothExp = "業務経験 / 自己学習";
    const html = new Skillset("html", "HTML", bothExp);
    const css = new Skillset("css", "CSS", bothExp);
    const js = new Skillset("js", "JavaScript", bothExp);
    const react = new Skillset("react", "React.js", amaExp);
    const redux = new Skillset("redux", "Redux.js", amaExp);
    const jquery = new Skillset("jquery", "jQuery", amaExp);
    const node = new Skillset("node", "node.js", amaExp);
    const aws = new Skillset("aws", "AWS", amaExp);
    const git = new Skillset("git", "Git", amaExp);
    const github = new Skillset("github", "GitHub", amaExp);
    const svn = new Skillset("svn", "SubVerstion", bothExp);
    const linux = new Skillset("linux", "Linux", bothExp);
    const skillList = [html, css, js, react, redux, jquery, node, aws, git, github, svn, linux];

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