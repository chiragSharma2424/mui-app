import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Appbar() {
    const navigate = useNavigate();
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
           <Button variant='contained' style={{marginRight: "20px"}}
               onClick={() => {
                  navigate('/signup');
               }}
           >Sign up</Button>

           <Button variant='contained' style={{marginRight: "20px"}}
            onClick={() => {
                navigate('/signin');
            }}
           >Sign in</Button>
      </div>
     
    </div>
  )
}

export default Appbar;