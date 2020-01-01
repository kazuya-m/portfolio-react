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
          <form>
            <p>メールアドレス：</p>
            <input
              type="text"
              name="email"
               />
            <p>お問い合わせ内容</p>
            <textarea />
            <input
              type="submit"
              name="submit-button"
               />



          </form>
        </div>
      </div>
    )
  }

}

export default Contact;