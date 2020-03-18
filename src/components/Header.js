import React from 'react';
import {BrowserRouter as Router, Link, Route,} from "react-router-dom";
import Top from './Top';
import Introduction from './Introduction';
import Aboutme from './Aboutme';
import Works from './Works';
import Contact from './Contact';

 class Header extends React.Component {
   render() {
    return(
      <Router>
        <header>
          <div className="container">
            <div className="header-left">
            <Link to='/'><h2>Kazuya Matuso</h2></Link>
            </div>
            <div className="header-right">
              <ul id="menu">
                <li><Link to='/Introduction'>Introduction</Link></li>
                <li><Link to='/Aboutme'>About Me</Link></li>
                <li><Link to='/Works'>Works</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><a href="https://github.com/kazuya-m" alt="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a></li>
              </ul>
            </div>
          </div>
        </header>
          <Route exact path='/' component={Top} />
          <Route path='/Introduction' component={Introduction} />
          <Route path='/Aboutme' component={Aboutme} />
          <Route path='/Works' component={Works} />
          <Route path='/Contact' component={Contact} />
    </Router>
    )
   }
}

export default Header;