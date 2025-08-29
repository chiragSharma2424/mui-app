import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup';
import Appbar from './Components/Appbar';
import Signin from './Components/Signin';


function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh"
    }}>
      <Appbar />

      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App;