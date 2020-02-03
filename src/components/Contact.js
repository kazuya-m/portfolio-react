import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      text: '',
      hasTextError: false,
    };
  }
  
  handleEmailChange(emailInput) {
    let inputValue = emailInput.target.value;
    this.setState({email: inputValue});
    if ((inputValue.length >= 8 && !inputValue.includes('@')) || inputValue.length === 0) {
      this.setState({hasEmailError: true});
    } else {
      this.setState({hasEmailError: false});
    }
  }
  
  handleTextChange(textInput) {
    let inputValue = textInput.target.value;
    let isEmpty = inputValue === '';
    this.setState({
      text: inputValue,
      hasTextError: isEmpty
    });
  }

  handleSubmit(){
    if (!this.state.hasEmailError && !this.state.hasTextError) {
      this.setState({isSubmitted: true});
    }
  }
  
  render() {
    let emailErrorMsg;
    let textErrorMsg;
    if (this.state.hasEmailError) {
      emailErrorMsg = (
        <p>正しいメールアドレスを入力してください</p>
      )
    } else if (this.state.hasTextError) {
      textErrorMsg = (
        <p>お問い合わせ内容を入力してください</p>
      )
    }
    let contactForm
    if (!this.state.isSubmitted) {
      contactForm = (
        <div className="form-area">
          <div className="heading">
            <h2>Contact</h2>
          </div>
          <div className="contact-form">
            <form onSubmit={()=>{this.handleSubmit()}}>
              <p>メールアドレス：</p>
              {emailErrorMsg}
              <input 
                type="text"
                name="email"
                value={this.state.email}
                onChange={(emailInput)=>{this.handleEmailChange(emailInput)}}
               />
              <p>お問い合わせ内容</p>
              {textErrorMsg}
              <textarea
                value={this.state.text}
                onChange={(textInput)=>{this.handleTextChange(textInput)}}
               />
              <input
                type="submit"
                name="submit-button"
                value="送信(実際には何も送信されません)"
              />
            </form>
          </div>
        </div>
      );
    } else {
      contactForm = (
        <div className="submitted">
          送信完了 (実際には何も送信されていません)
        </div>
      )
    }
    return (
      <div className="contact-wrapper" id="contact">
        <div className="container">
          {contactForm}
        </div>
      </div>
    );
  }
}

export default Contact;