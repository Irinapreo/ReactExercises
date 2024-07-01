// src/App.js
// src/App.js
import React from 'react';
import HelloMessage from './components/HelloMessage';
import Card from './components/Card';
import Menu from './components/Menu';
// import Profile from './pages/profile/profile'

function App() {
  return (
    <div className="App">
      <Menu />
      <Card>      
        <HelloMessage name="Taylor" age={18} address="some address"/>
      </Card>
      <Card>      
        <HelloMessage name="Jon" age={25} address="some other address"/>
      </Card>
      {/* <Profile /> */}
    </div>
  );
}

export default App;


/*
// src/App.js
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
*/
