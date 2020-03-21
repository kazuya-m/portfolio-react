import React from 'react';

class Skills extends React.Component {
  render() {
    return(
      <div className="skills">
        <ul id="skill-list">
          <li>
            <i class="fab fa-html5 fa-5x"></i>
            <p>HTML</p>
            <p>業務経験 / 自己学習</p>
          </li>
          <li>
            <i class="fab fa-css3-alt fa-5x"></i>
            <p>CSS</p>
            <p>業務経験 / 自己学習</p>
          </li>
          <li>
            <i class="fab fa-js-square fa-5x"></i>
            <p>JavaScript</p>
            <p>業務経験 / 自己学習</p>
          </li>
          <li>
            <i class="fab fa-react fa-5x"></i>
            <p>React</p>
            <p>自己学習</p>
          </li>
          <li>
            <i class="fab fa-jquery"></i>
            <p>jQuery</p>
            <p>業務経験 / 自己学習</p>
          </li>
          <li>
            <i class="fab fa-github-square fa-5x"></i>
            <p>GitHub</p>
            <p>自己学習</p>
          </li>
          <li>
            <i class="fab fa-aws fa-5x"></i>
            <p>AWS</p>
            <p>自己学習</p>
          </li>
          <li>
            <i class="fab fa-linux fa-5x"></i>
            <p>Linux</p>
            <p>自己学習</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Skills;