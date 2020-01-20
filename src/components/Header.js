import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="container">
          <div className="header-left">
            <h2>Kazuya Matuso</h2>
          </div>
          <div className="header-right">
            <a href="#introduction" className="menu">Introduction</a>
            <a href="#aboutme" className="menu">About Me</a>
            <a href="#works" className="menu">Works</a>
            <a href="#contact" className="menu">Contact</a>
            <a href="https://github.com/kazuya-m" alt="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;