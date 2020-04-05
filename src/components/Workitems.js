import React from 'react';

class Worksitems extends React.Component {
  constructor(props){
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickWorks(){
    this.setState({isModalOpen: true});
    
  }

  handleClickClose(){
    this.setState({isModalOpen: false});
  }
  
  render(){
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal" id="portfolio-modal">
            <div className="close-modal">
              <i 
                className="far fa-window-close fa-2x close-btn"
                onClick={() => {this.handleClickClose()}}></i>
            </div>
            <div className="modal-box">
              <div className="modal-title align-center">
                <h3>{this.props.name}</h3>
              </div>
              <div className="modal-description">
                <p>{this.props.description}</p>
              </div>
              <div className="modal-skills">
                <p>{this.props.skills}</p>
              </div>
              <div className="modal-link">
                <p>URL git</p>
              </div>
              <div className="modal-photo align-center">
                <img src="img/portfolio.jpg" alt="test" />
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
          <p>{this.props.name}</p>
        </div>
        {modal}
     </div>
    )
  }
}

export default Worksitems;