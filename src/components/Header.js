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
              <a href="#top"><h2>Kazuya Matuso</h2></a>
            </div>
            <div className="header-right">
              <ul id="menu">
                <li><Link to='/'>Home</Link></li>
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
        // <header>
        //   <div className="container">
        //     <div className="header-left">
        //       <a href="#top"><h2>Kazuya Matuso</h2></a>
        //     </div>
        //     <div style={{width: '500px', textAlign: 'left'}}>
        //       <ul style={{display: 'flex'}}>
        //         <li style={liStyle}>Introduction</li>
        //         <li style={liStyle}>About Me</li>
        //         <li style={liStyle}>Works</li>
        //         <li style={liStyle}>Contact</li>
        //       </ul>
        //     {/* <div className="header-right">
        //       <a href="#introduction" className="menu">Introduction</a>
        //       <a href="#aboutme" className="menu">About Me</a>
        //       <a href="#works" className="menu">Works</a>
        //       <a href="#contact" className="menu">Contact</a>
        //       <a href="https://github.com/kazuya-m" alt="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a> */}
        //   </div>
        //   </div>
        // </header>
    )
   }
}

export default Header;