import React from 'react';
import Skills from './Skills';
import Profile from './Profile';

import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Icon from '@material-ui/core/Icon';

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
              // indicatorColor="action"
             //color="secondary"
              centered
//              style={style}
            >
              <NavLink to='/Aboutme'><Tab label="PROFILE" icon={<Icon>how_to_reg</Icon>}/></NavLink>
              <NavLink to='/Aboutme/Skills'><Tab label="SKILLS" icon={<Icon>playlist_add_check</Icon>}/></NavLink>
            </Tabs>
              <div className="content-area">
                <Route exact path='/Aboutme' component={Profile} />
                <Route
                  exact path='/Aboutme/Skills'
                  render={props => <Skills skillList={skillList} />}
                />
              </div>
            </div>
          </div>
        
      </Router>
    )
  }
}

const style = {
  indicatorColor: '#f7f7f7'
}
export default Aboutme;