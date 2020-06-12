import React from 'react';
import Skills from './Skills';
import Profile from './Profile';
import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

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
    const materialui = new Skillset("materialui", "Material-UI", amaExp);
    const aws = new Skillset("aws", "AWS", amaExp);
    const git = new Skillset("git", "Git", amaExp);
    const github = new Skillset("github", "GitHub", amaExp);
    const jquery = new Skillset("jquery", "jQuery", bothExp);
    const svn = new Skillset("svn", "SubVerstion", bothExp);
    const linux = new Skillset("linux", "Linux", bothExp);
    const skillList = [html, css, js, react, redux, materialui, aws, git, github, jquery, svn, linux];

    return(
      <Router>
        <div className="aboutme-wrapper wrapper">
          <div className="container">
            <div className="heading">
              <h2>About Me</h2>              
            </div>
            <Tabs
              // value={value}
              // onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="PROFILE" />
              <Tab label="SKILLS" />
            </Tabs>
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