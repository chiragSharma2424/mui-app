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
        />

        <TextField 
          label="Description" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          multiline
          rows={3}
        />

        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          style={{ marginTop: "15px", textTransform: "none" }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}

export default Addcourse;