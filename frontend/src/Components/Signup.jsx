import React, { useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

        <TextField label="Email" fullWidth margin="normal" onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <TextField label="Password" type="password" fullWidth margin="normal" 
           onChange={(e) => {
            setPassword(e.target.value);
           }}
        />

        <Button variant="contained" fullWidth
          style={{ marginTop: "16px", borderRadius: "8px" }}
          
          onClick={() => {
            fetch('http://localhost:3000/admin/signup', {
                method: "POST",
                body: JSON.stringify({
                    username: email,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((resp) => {
                return resp.json();
            }).then((data) => {
                console.log(data);
                console.log(data.token);
                localStorage.setItem("token", data.token);
            })
          }}
          >
            
          Sign Up
        </Button>
      </Card>
    </div>
  );
}

export default Signup;