import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Appbar() {
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/admin/me', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
        })
    }, []);

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px'
    }}>
        <div>
            <Typography style={{
                fontSize: "30px"
            }}>Coursera</Typography>
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

           <Button variant='contained' style={{marginRight: "20px"}}
            onClick={() => {
                navigate('/addcourse');
            }}
           >Addcourse</Button>
      </div>
     
    </div>
  )
}

export default Appbar;