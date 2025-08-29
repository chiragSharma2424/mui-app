import React from 'react'
import { Button, Card, TextField } from '@mui/material';

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