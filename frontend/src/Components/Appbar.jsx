import React from 'react';
import { Button, Typography } from '@mui/material'

function Appbar() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px'
    }}>
        <div>
            <Typography>Coursera</Typography>
        </div>
      
      <div>
           <Button variant='contained' style={{marginRight: "20px"}}>Sign up</Button>
           <Button variant='contained' style={{marginRight: "20px"}}>Sign in</Button>
      </div>
     
    </div>
  )
}

export default Appbar;