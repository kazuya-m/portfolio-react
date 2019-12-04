import React from 'react';
import Header from './Header';
import Top from './Top';
import Introduction from './Introduction';
import Aboutme from './Aboutme';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Top />
        <Introduction />
        <Aboutme />
      </div>
    );
  }
}

export default App;