import React from "react";
import { Button, Card, TextField, Typography } from "@mui/material";

function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>

      <Typography variant="h6" gutterBottom>
        Welcome to Coursera
      </Typography>

      <Typography variant="body2" color="text.secondary" gutterBottom>
        Sign up to continue
      </Typography>
    
    
      <Card
        variant="outlined"
        style={{
          width: "450px",
          margin: "20px auto",
          padding: "25px",
          borderRadius: "12px",
        }}>

        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" fullWidth
          style={{ marginTop: "16px", borderRadius: "8px" }}>
          Sign Up
        </Button>
      </Card>
    </div>
  );
}

export default Signup;