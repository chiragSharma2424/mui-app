import React, { useState } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <center>
        <div style={{ paddingTop: '120px', marginBottom: '15px' }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            Sign in to Coursera
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Welcome back! Please enter your credentials.
          </Typography>
        </div>
      </center>

      <center>
        <Card variant="outlined" style={{ width: "400px", padding: "25px" }}>
          <TextField 
            variant="outlined" 
            label="Email" 
            fullWidth 
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
            margin="normal"/>
            

          <TextField 
            variant="outlined" 
            label="Password" 
            type="password" 
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
            fullWidth 
            margin="normal"
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ marginTop: "15px", borderRadius: "8px", textTransform: "none" }}
            onClick={() => {
              fetch('http:localhost:3000/admin/signin', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              }).then((resp) => {
                return resp.json();
              }).then((data) => {
                console.log(data);
              }).catch((err) => {
                console.log(`something went wrong: ${err}`);
              })
            }}
          >
            Sign In
          </Button>
        </Card>
      </center>
    </div>
  );
}

export default Signin;
