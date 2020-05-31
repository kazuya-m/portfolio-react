import React from 'react';
import Workitems from './Workitems';
//import Portfolio from '../img/works-cs.jpg';


class Works extends React.Component {
  render() {
    function Works (id, name, description, skills, img, url) {
      [this.id, this.name, this.description, this.skills, this.img, this.url] = [id, name, description, skills, img, url];
    }
    
    const reactfolio = new Works("01",
                                "ポートフォリオ (React + AWS)",
                                "自分の経歴やスキルをまとめたポートフォリオサイトです。\nReactを使用し、環境面はAWSで整備しました。\nSPA化するためにreact-routerライブラリを使用し、メニューを選択すると差分だけレンダリングするようにしています。",
                                "HTML / CSS / React / AWS",
                                "../img/reactfolio.jpg",
                                "https://github.com/kazuya-m/portfolio-react"
                                );
    const portfolio = new Works("02",
                                "ポートフォリオ (jQuery)",
                                "自分の経歴やスキルをまとめたポートフォリオサイトです。\njQueryを使用してモーダルやアコーディオンを実装することで動きのあるサイトにしました。",
                                "HTML / CSS / jQuery",
                                "../img/portfolio.jpg",
                                "https://kazuya-m.github.io/portfolio/"
                                );
    const no3 = new Works("03",
                          "Work in Progress...",
                          "working on it!",
                          "",
                          "../img/works-cs.jpg",
                          ""
                          );
    const no4 = new Works("04",
                          "Work in Progress...",
                          "working on it!",
                          "",
                          "../img/works-cs.jpg",
                          ""
                          );

  const workList = [reactfolio, portfolio, no3, no4];
  console.log(workList);

  return (
    <div className="works-wrapper wrapper" id="works">
      <div className="container">
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