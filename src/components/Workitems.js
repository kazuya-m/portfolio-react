import React from 'react';

class Worksitems extends React.Component {
  render(){
    return(
      <div className='works-item'>
        <img src={this.props.img} alt="a" />
        <p>{this.props.id}{this.props.name}</p>
      </div>
    )
  }
}

export default Worksitems;