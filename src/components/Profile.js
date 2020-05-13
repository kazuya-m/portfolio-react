import React from 'react';
// import Cv from './Cv.js';

class Profile extends React.Component {
  render() {
    // const detail1 = '計書や不具合修正内容などをもとに、/nテストの計画や設計を実施'
    // const cvList = [
    //   {
    //     id: '01',
    //     name: 'ファイル転送ソフトのテスト',
    //     duration: '2016/12~2019/09',
    //     detail: detail1,
    //     skills: 'Linux/VMWareWorkstation/Tomcat8/Squid/PostgreSQL',
    //     isOpen: false
    //   },
    //   {
    //     id: '02',
    //     name: 'クレジットカード端末のテスト',
    //     duration: '2019/10~12',
    //     detail: '・設計書などをもとに、テストの計画や設計を実施<br />・計画や設計に準じた項目書の作成及び実施',
    //     skills: 'SVN/Redmine',
    //     isOpen: false
    //   },
    //   {
    //     id: '03',
    //     name: 'ファイル転送ソフトのテスト',
    //     duration: '2016/12~2019/09',
    //     detail: '',
    //     skills: 'Linux/VMWareWorkstation/Tomcat8/Squid/PostgreSQL',
    //     isOpen: false
    //   },];

    return(
      <div className="aboutme-wrapper">
        <div className="container">
          <div className="profile card content">
            <div className="profile-icon">
              <i className="fas fa-user-graduate fa-6x"></i>
            </div>
            <div className="description">
              <p>こんにちは。マツオ カズヤと申します。<br />
                Webフロントエンドエンジニアを目指してIT業界に入り、現在4年目の28歳です。<br />
                主にテスト案件を担当していましたが、2020年からは開発・改修に携わる案件に参画しています。<br />
                自己学習はモダンフロントエンドを中心に行っており、<a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">フロントエンドロードマップ <i className="fas fa-external-link-alt"></i></a> を参考にしています。<br />
                このポートフォリオサイトも学習の一環で作成しました。<br />
                他の成果物もこのサイトやgithub上で公開しています。
              </p>
              <p>GitHub : <a href="https://github.com/kazuya-m" target="_blank" rel="noopener noreferrer">https://github.com/kazuya-m</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;