
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>the app component</h1>
//     </div>
//   );
// }

// export default App;
 
import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
        </div>
      </div>
    );
  }
}

export default App; 