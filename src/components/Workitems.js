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
        <div className="modal card" id="portfolio-modal">
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
                {this.props.description.split('\n').map(line => (<p>{line}</p>))}
              </div>
              <div className="modal-skills">
                <p>{this.props.skills}</p>
              </div>
              <div className="modal-link">
                <a href={this.props.url}>{this.props.url}</a>
              </div>
              <div className="modal-photo align-center">
                <img src={this.props.img} alt="test" />
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