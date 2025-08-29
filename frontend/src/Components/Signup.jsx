import React from 'react'
import { Button, Card, TextField, Typography } from '@mui/material';

function Signup() {
  return (
    <div>
        <center>
            <div style={{
                paddingTop: '150px',
                marginBottom: '10px'
            }}>
                <Typography variant='h6'>
                    Welcome to coursera signup above
                </Typography>
                
            </div>
        </center>

        <center>
      <Card variant='outlined' style={{
        width: "500px",
        height: "200px",
        padding: "30px"
      }}>
        <TextField variant='outlined' label='Email' fullWidth={true}/><br /><br />
        <TextField variant='outlined' label='Password' fullWidth={true}/><br /><br />
        <Button variant='contained'>Sign-up</Button>   
      </Card>
      </center>
    </div>
  )
}

export default Signup;