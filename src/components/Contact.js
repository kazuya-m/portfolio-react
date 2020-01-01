import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
    }
  };

  render() {
    return (
      <div className="contact-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Contact</h2>
          </div>
          submit form area
        </div>
      </div>
    )
  }

}

export default Contact;