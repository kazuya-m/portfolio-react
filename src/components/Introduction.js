import React from 'react';
import logo from '../img/react-logo.png';

class Introduction extends React.Component {
  render() {
    return(
      <div className="introduction-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Introduction</h2>
            <img src={logo} alt="react-logo" />
          </div>
         </div>
      </div>
    )
  }
}

export default Introduction;