import React from 'react';
import {ReactComponent as Html} from '../img/lang/html-icon.svg';
import {ReactComponent as Css} from '../img/lang/css3.svg';
import {ReactComponent as Javascript} from '../img/lang/javascript.svg';
import {ReactComponent as Reactjs} from '../img/lang/react.svg';
import {ReactComponent as Aws} from '../img/lang/aws.svg';
import {ReactComponent as Node} from '../img/lang/nodejs.svg';
import {ReactComponent as Jquery} from '../img/lang/jquery.svg';
import {ReactComponent as Git} from '../img/lang/git.svg';
import {ReactComponent as Github} from '../img/lang/github.svg';
import {ReactComponent as Linux} from '../img/lang/linux.svg';
import {ReactComponent as Svn} from '../img/lang/svn.svg';
import {ReactComponent as Typescript} from '../img/lang/typescript.svg';
import {ReactComponent as Redux} from '../img/lang/redux.svg';
import {ReactComponent as Materialui} from '../img/lang/material-ui.svg';

class Icon extends React.Component {
  render(){ 
    let icon;
    switch (this.props.id) {
      case 'html':
        icon = <Html />
        break;
      case 'css':
        icon = <Css />
        break;
      case 'js':
        icon = <Javascript />
        break;
      case 'react':
        icon = <Reactjs />
        break;
      case 'jquery':
        icon = <Jquery />
        break;
      case 'aws':
        icon = <Aws />
        break;
      case 'node':
        icon = <Node />
        break;
      case 'git':
        icon = <Git />
        break;
      case 'github':
        icon = <Github />
        break;
      case 'linux':
        icon = <Linux />
        break;
      case 'svn':
        icon = <Svn />
        break;
      case 'ts':
        icon = <Typescript />
        break;
      case 'redux':
        icon = <Redux />
        break;
      case 'materialui':
        icon = <Materialui />
        break;
      default:
        break;
    }
    return (
      // <div className="skill-icon">
        icon
      // </div>
    )
  }
}
export default Icon;
