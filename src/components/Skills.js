import React from 'react';
import Icon from './Icon.js';

class Skills extends React.Component {
  render() {
    let skillCard = this.props.skillList.map(skill =>
      <li key={skill.id}>
        <div className="skill-icon">
          <Icon id={skill.id} />
        </div>
        <p>{skill.name}</p>
        <p id="exp">{skill.exp}</p>
      </li>
    );
    console.log(skillCard);
    return(
      <div className="skills content">
      <ul id="skill-list">
        {skillCard}
      </ul>
    </div>
    );
  }
}

export default Skills;