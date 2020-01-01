import React from 'react';
import Header from './Header';
import Top from './Top';
import Introduction from './Introduction';
import Aboutme from './Aboutme';
import Works from './Works';
import Contact from './Contact';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Top />
        <Introduction />
        <Aboutme />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default App;