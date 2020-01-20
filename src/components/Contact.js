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
      <div className="contact-wrapper" id="contact">
        <div className="container">
          <div className="form-area">
            <div className="heading">
              <h2>Contact</h2>
            </div>
            <div className="contact-form">
              <form>
                <p>メールアドレス：</p>
                <input
                  type="text"
                  name="email"
                  />
                <p>お問い合わせ内容</p>
                <textarea />
                <input
                  type="button"
                  name="submit-button"
                  value="送信(実際には何も送信されません)"
                  />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Contact;