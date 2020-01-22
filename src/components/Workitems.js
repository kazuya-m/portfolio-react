import React from 'react';

class Worksitems extends React.Component {
  constructor(props){
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickWorks(){
    this.setState({isModalOpen: true});
    console.log(this.state.isModalOpen);
  }

  handleClickClose(){
    this.setState({isModalOpen: false});
  }
  
  render(){
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal" id="portfolio-modal">
          <div className="modal-container">
            <div className="close-modal">
              <i 
                className="fas fa-times-circle fa-2x close"
                onClick={() => {this.handleClickClose()}}></i>
            </div>
            <div className="modal-box">
              <div className="modal-description">
                <h3>ポートフォリオ</h3>
                <p>このサイトです。<br />レスポンシブデザインに対応するよう製作しました。<br />
                  モーダル、アコーディオンなどをjQueryで実装しました。<br />
                </p>
                <h3 className="languages">使用言語など</h3>
                <p>HTML, CSS, jQuery</p>
              </div>
              <div className="modal-photo">
                <img src="img/portfolio.jpg" alt="test" />
              </div>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div className='works-item'>
        <div
         className='works-cards'
         onClick={() => {this.handleClickWorks()}}>
          <img src={this.props.img} alt="a" />
          <p>{this.props.id}{this.props.name}</p>
        </div>
        {modal}
     </div>
    )
  }
}

export default Worksitems;