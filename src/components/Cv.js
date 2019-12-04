import React from 'react';

class Cv extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cvList: props.cvList,
      cvItem: ''
    }
  }

  //クリックされた案件のopen or closeをset
  setOpenState(clickedCv) {
    if (clickedCv.isOpen === false) {
      clickedCv.isOpen = true;
    } else {
      clickedCv.isOpen = false;
    }
    return clickedCv;
  }

  //クリックされた案件以外のopen状態をfalseにセット
  // closeOtherCv(notClickedCv) {
  //   notClickedCv.forEach(cv => {
  //     cv.isOpen = false;
  //   });
  //   return notClickedCv;
  // }

  // クリックされた案件情報を抽出してsetState
  handleClickCv(clickedId) {
    const clickedCv = this.props.cvList.find((cv) => {
      return cv.id === clickedId;
    })
    const notClickedCv = this.props.cvList.find((cv) => {
      return cv.id !== clickedId;
    })
    let setNotClickedCv = notClickedCv.map((cv) => {
      cv.isOpen = false;
      return cv;
    })
    let updatedCvList = clickedCv + setNotClickedCv;
    this.setState({
      cvList: updatedCvList,
      cvItem: this.setOpenState(clickedCv)
    });
    console.log(this.state.cvList);
    console.log(this.state.cvItem);
  }

  render() {
    let cvDetail;
    if (this.state.cvList.isOpen === true) {
       cvDetail = (
         <div className="cv-detail">
          <h4>{this.state.cvList.name}</h4>
          <p>期間：{this.state.cvList.duration}</p>
          <p>詳細：{this.state.cvList.detail}</p>
          <p>スキル：{this.state.cvList.skills}</p>
         </div>
       )
    }
    return(
      <div className="cv-list">
        <button className="btn" onClick={()=>{this.handleClickCv('01')}}>案件1</button>
        <button className="btn" onClick={()=>{this.handleClickCv('02')}}>案件2</button>
        <div className="cv-item">
          <h4>{this.props.name}</h4>
            <div className="cv-detail">
              {cvDetail}
            </div>
          </div>
        </div>

    )
  }
}

export default Cv;