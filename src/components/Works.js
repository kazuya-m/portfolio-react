import React from 'react';
import Workitems from './Workitems';
import Portfolio from '../img/works-cs.jpg';


class Works extends React.Component {
  render() {
    const workList = [
      {
        id: '01',
        name: 'ポートフォリオ',
        img: {Portfolio},
        isOpen: false
      },
      {
        id: '02',
        name: 'ポートフォリオ(React + AWS)',
        img: '../img/works-cs.jpg',
        isOpen: false
      },
      {
        id: '03',
        name: '...',
        img: '../img/works-cs.jpg',
        isOpen: false
      },
      {
        id: '04',
        name: '...',
        img: '../img/works-cs.jpg',
        isOpen: false
      },
    ];

  return (
    <div className='works-wrapper' id="works">
      <div className='container'>
        <div className="heading">
          <h2 className="title">Works</h2>
        </div>
        <div className="works-box">
          {workList.map((worksItem) => {
            return(
              <Workitems
                id={worksItem.id}
                name={worksItem.name}
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