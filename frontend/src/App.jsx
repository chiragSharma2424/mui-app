import React from 'react';
import Signup from './Components/Signup';
import Appbar from './Components/Appbar';


function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh"
    }}>
      <Appbar />
      <Signup />
    </div>
  )
}

export default App;