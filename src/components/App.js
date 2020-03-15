import React from 'react';
import Header from './Header';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
      </div>
      // <Router>
      //   <div>
      //     <ul>
      //       <li><Link to='/'>Home</Link></li>
      //       <li><Link to='/Introduction'>Introduction</Link></li>
      //       <li><Link to='/Aboutme'>About Me</Link></li>
      //       <li><Link to='/Works'>Works</Link></li>
      //       <li><Link to='/Contact'>Contact</Link></li>
      //     </ul>
      //     <Route exact path='/' component={Top} />
      //     <Route path='/Introduction' component={Introduction} />
      //     <Route path='/Aboutme' component={Aboutme} />
      //     <Route path='/Works' component={Works} />
      //     <Route path='/Contact' component={Contact} />
      //   </div>
      // </Router>
    )
  //     <div>
  //       <Header />
  //     </div>
  //   )
  //     // <div>
  //     //   <Header />
  //     //   <Top />
  //     //   <Introduction />
  //     //   <Aboutme />
  //     //   <Works />
  //     //   <Contact />
  //     // </div>
  //   //);
   }
 }

export default App;