import React from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';

function Signin() {
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
            margin="normal"/>
            
          <TextField 
            variant="outlined" 
            label="Password" 
            type="password" 
            fullWidth 
            margin="normal"
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ marginTop: "15px", borderRadius: "8px", textTransform: "none" }}
          >
            Sign In
          </Button>
        </Card>
      </center>
    </div>
  );
}

export default Signin;
