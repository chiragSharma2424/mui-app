import React from 'react'

function Signup() {
  return (
    <div>
        <center>
            <div style={{
                marginTop: '150px',
                marginBottom: '10px'
            }}>
                Welcome to coursera signup above
            </div>
        </center>

        <center>
      <div style={{
        border: '2px solid black',
        width: '400px'
      }}>
         Username - <input type="text" /><br />
         Password - <input type="password" /><br />
        <button>Sign up</button>
      </div>
      </center>
    </div>
  )
}

export default Signup;