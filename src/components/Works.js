import React from 'react';
import Workitems from './Workitems';
//import Portfolio from '../img/works-cs.jpg';


class Works extends React.Component {
  render() {
    function Works (id, name, description, skills, img, url, isOpen) {
      [this.id, this.name, this.description, this.skills, this.img, this.url, this.isOpen] = [id, name, description, skills, img, url, isOpen];
    }
    
    const reactfolio = new Works("01",
                                "ポートフォリオ (React + AWS)",
                                "自分の経歴やスキルをまとめたポートフォリオサイトです。\nReactを使用し、環境面はAWSで整備しました。\nSPA化するためにreact-routerライブラリを使用し、メニューを選択すると差分だけレンダリングするようにしています。",
                                "HTML / CSS / React / AWS",
                                "../img/reactfolio.jpg",
                                "https://github.com/kazuya-m/portfolio-react",
                                "false");
    const portfolio = new Works("02",
                                "ポートフォリオ (jQUery)",
                                "自分の経歴やスキルをまとめたポートフォリオサイトです。\njQueryを使用してモーダルやアコーディオンを実装することで動きのあるサイトにしました。",
                                "HTML / CSS / jQuery",
                                "../img/portfolio.jpg",
                                "https://kazuya-m.github.io/portfolio/",
                                "false");
    const no3 = new Works("03",
                          "Work in Progress...",
                          "working on it!",
                          "",
                          "../img/works-cs.jpg",
                          "",
                          "false");
    const no4 = new Works("04",
                          "Work in Progress...",
                          "working on it!",
                          "",
                          "../img/works-cs.jpg",
                          "",
                          "false");                              
    const workList = [reactfolio, portfolio, no3, no4];

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
                key={worksItem.id}
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