import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';

function Addcourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <Card variant="outlined" style={{ width: "400px", padding: "25px" }}>
        <Typography variant="h6" gutterBottom>
          Add New Course
        </Typography>

        <TextField 
          label="Course Title" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <TextField 
          label="Description" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          multiline
          rows={3}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          style={{ marginTop: "15px", textTransform: "none" }}
          onClick={() => {
            fetch('http://localhost:3000/admin/courses', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    imageLink: "",
                    published: true
                })
            }).then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data);
            })
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}

export default Addcourse;