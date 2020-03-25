import React from 'react';
import Workitems from './Workitems';
//import Portfolio from '../img/works-cs.jpg';


class Works extends React.Component {
  render() {
    const workList = [
      {
        id: '01',
        name: 'ポートフォリオ',
        description: '自分の経歴やスキルをまとめたポートフォリオサイトです。jQueryを使用してモーダルやアコーディオンを実装することで動きのあるサイトにしました。',
        skills: 'HTML/CSS/React/AWS',
        img: '../img/portfolio.jpg',
        isOpen: false
      },
      {
        id: '02',
        name: 'ポートフォリオ React + AWS',
        description: '自分の経歴やスキルをまとめたポートフォリオサイトです。Reactを使用し、環境面はAWSで整備しました。SPA化するためにreact-routerライブラリを使用し、メニューをクリックすると差分だけレンダリングするようにしています。',
        skills: 'HTML/CSS/React/AWS',
        img: '../img/works-cs.jpg',
        isOpen: false
      },
      {
        id: '03',
        name: '...',
        description: '',
        skills: 'HTML/CSS/React/AWS',
        img: '../img/works-cs.jpg',
        isOpen: false
      },
      {
        id: '04',
        name: '...',
        description: '',
        skills: 'HTML/CSS/React/AWS',
        img: '../img/works-cs.jpg',
        isOpen: false
      },
    ];

  return (
    <div className='works-wrapper' id="works">
      <div className='container'>
        <div className="heading">
          <h2>Works</h2>
        </div>
        <div className="works-box">
          {workList.map((worksItem) => {
            return(
              <Workitems
                id={worksItem.id}
                name={worksItem.name}
                description={worksItem.description}
                skills={worksItem.skills}
                img={worksItem.img}
              />
            );}
          )}
        </div>
      </div>
    </div>
    );
  }
}

export default Works;