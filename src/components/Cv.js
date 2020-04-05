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
   closeOtherCv(notClickedCv) {
     notClickedCv.isOpen = false;
     return notClickedCv;
   }

  //クリックされた案件情報を抽出してsetState
  handleClickCv(clickedId) {
    const clickedCv = this.props.cvList.find((cv) => {     //クリックされた案件を抽出
      return cv.id === clickedId;
    })
    const notClickedCv = this.props.cvList.find((cv) => {  //クリックされてない案件を抽出
      return cv.id !== clickedId;
    })
    this.closeOtherCv(notClickedCv);
    this.setOpenState(clickedCv);
    //クリックされた案件情報を表示するためにリストに格納
    this.setState({
      cvList: clickedCv,
    });
  }
  
  render() {
    let cvDetail;
    if (this.state.cvList.isOpen === true) {
       cvDetail = (
         <div className="cv-detail" style={{whiteSpace: "pre-line"}}>
          <h4>No.{this.state.cvList.id} {this.state.cvList.name}</h4>
          <p>期間：{this.state.cvList.duration}</p>
          <p>詳細：{this.state.cvList.detail}</p>
          <p>スキル：{this.state.cvList.skills}</p>
         </div>
       )
    }
    return(
      <div className="cv-list">
        <div className="cv-button">
          <button className="btn" onClick={()=>{this.handleClickCv('01')}}>案件詳細 1</button>
        </div>
        <div className="cv-button">
          <button className="btn" onClick={()=>{this.handleClickCv('02')}}>案件詳細 2</button>
        </div>
      <div className="cv-item">
        <h4>{this.props.name}</h4>
        <div className="cv-detail" style={{whiteSpace: "pre-line"}}>
          {cvDetail}
        </div>
      </div>
    </div>
    )
  }
}

export default Cv;