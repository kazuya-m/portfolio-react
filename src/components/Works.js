import React from 'react';
import Workitems from './Workitems';
//import Portfolio from '../img/works-cs.jpg';


class Works extends React.Component {
  render() {
    const workList = [
      {
        id: '01',
        name: 'ポートフォリオ (React + AWS)',
        description: '自分の経歴やスキルをまとめたポートフォリオサイトです。¥nReactを使用し、環境面はAWSで整備しました。¥nSPA化するためにreact-routerライブラリを使用し、メニューを選択すると差分だけレンダリングするようにしています。',
        skills: 'HTML / CSS / React / AWS',
        img: '../img/reactfolio.jpg',
        url: 'https://github.com/kazuya-m/portfolio-react',
        isOpen: false
      },
      {
        id: '02',
        name: 'ポートフォリオ (jQUery)',
        description: '自分の経歴やスキルをまとめたポートフォリオサイトです。¥njQueryを使用してモーダルやアコーディオンを実装することで動きのあるサイトにしました。',
        skills: 'Skills : HTML / CSS / jQuery',
        img: '../img/portfolio.jpg',
        url: 'https://kazuya-m.github.io/portfolio/',
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
    <div className='works-wrapper wrapper' id="works">
      <div className='container'>
        <div className="heading">
          <h2>Works</h2>
        </div>
        <div className="works-box content">
          {workList.map((worksItem) => {
            return(
              <Workitems
                id={worksItem.id}
                name={worksItem.name}
                description={worksItem.description}
                skills={worksItem.skills}
                url={worksItem.url}
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