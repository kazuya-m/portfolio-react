import React from 'react';
import Icon from './Icon.js';

class Introduction extends React.Component {
  render() {
    return(
      <div className="introduction-wrapper wrapper">
        <div className="container">
          <div className="heading">
            <h2>About This Site</h2>
            <div className="intro-desc content card">
              <div className="inner">
                  <p>私のプロフィールや学習成果物を掲載しているポートフォリオサイトです。<br />
                    Reactで作成し、メニューをクリックすると差分を再描画するSPA構成にしています。<br />
                    インフラ面にはAWSを使用し、S3上にデプロイしています。<br />
                  </p>
                <div className="intro-icon">
                  <Icon id='react' />
                  <Icon id='aws' />
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    )
  }
}

export default Introduction;