import React from 'react';
import { connect } from 'react-redux';
import { modalOpen, modalClose } from '../actions';

class Worksitems extends React.Component {
  constructor(props){
    super(props);
    this.state = {isModalOpen: false};
  }

  render() {
    let modal;
    console.log(this.props.isOpen);
    if (this.props.isOpen) {
      modal = (
        <div className="modal card" id="portfolio-modal">
            <div className="close-modal">
              <i 
                className="far fa-window-close fa-2x close-btn"
                onClick={this.props.modalClose} />
            </div>
            <div className="modal-box">
              <div className="modal-title align-center">
                <h3>{this.props.name}</h3>
              </div>
              <div className="modal-description">
                {this.props.description.split('\n').map((line,ind) => (<p key={ind}>{line}</p>))}
              </div>
              <div className="modal-skills">
                <p>{this.props.skills}</p>
              </div>
              <div className="modal-link">
                <a href={this.props.url}>{this.props.url}</a>
              </div>
              <div className="modal-photo align-center">
                <img src={this.props.img} alt={this.props.name} />
              </div>
            </div>
        </div>
      )
    }
    return(
      <div className='works-item'>
        <div
         className='works-cards'
         onClick={this.props.modalOpen}>
          <img key={this.props.id} src={this.props.img} alt={this.props.name} />
          <p>{this.props.name}</p>
        </div>
        {modal}
     </div>
    )
  }
}

const mapStateToProps = state => ({ isOpen: state.modal.isOpen })
const mapDispatchToProps = dispatch => ({
  modalOpen: () => dispatch(modalOpen()),
  modalClose: () => dispatch(modalClose())
})

export default connect(mapStateToProps, mapDispatchToProps)(Worksitems);