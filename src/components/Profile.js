import React from 'react';
import Cv from './Cv.js';

class Profile extends React.Component {
  render() {
    const detail1 = '計書や不具合修正内容などをもとに、/nテストの計画や設計を実施'
    const cvList = [
      {
        id: '01',
        name: 'ファイル転送ソフトのテスト',
        duration: '2016/12~2019/09',
        detail: detail1,
        skills: 'Linux/VMWareWorkstation/Tomcat8/Squid/PostgreSQL',
        isOpen: false
      },
      {
        id: '02',
        name: 'クレジットカード端末のテスト',
        duration: '2019/10~12',
        detail: '・設計書などをもとに、テストの計画や設計を実施<br />・計画や設計に準じた項目書の作成及び実施',
        skills: 'SVN/Redmine',
        isOpen: false
      },
      {
        id: '03',
        name: 'ファイル転送ソフトのテスト',
        duration: '2016/12~2019/09',
        detail: '',
        skills: 'Linux/VMWareWorkstation/Tomcat8/Squid/PostgreSQL',
        isOpen: false
      },];

    return(
        <div className="aboutme-wrapper">
          <div className="container">
            <div className="profile">
              <div className="profile icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="profile description">
                <p>こんにちは。マツオ カズヤと申します。<br />
                  たくさんのユーザーに使われるサービスや製品を開発したいという思いでIT業界に入り4年目です。<br />
                  <br />
                  このポートフォリオサイトもその一環で作成しました。<br />
                  主に勉強している言語など：HTML/CSS/JavaScript/React/jQuery/</p>
              </div>
            </div>
            <div className="cv">
              <Cv　cvList={cvList} />
            </div>
            </div>
          </div>
    )
  }
}

export default Profile;