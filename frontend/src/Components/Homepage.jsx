import React from "react";
import { AppBar,Toolbar,Typography,Button,Box,Container,Card,CardContent,Grid } from "@mui/material";

function Homepage() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "",
          py: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Learn the skills to build your future
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Short courses and professional certificates from top instructors.
          </Typography>
          <Button variant="contained" size="large" sx={{ textTransform: "none", borderRadius: 2 }}>
            Explore Courses
          </Button>
        </Container>
      </Box>


      <Container sx={{ py: 6}} style={{marginLeft: '400px'}}>
        <Grid container spacing={3}>
          {[
            { title: "Top Instructors", desc: "Learn from industry experts." },
            { title: "Flexible Learning", desc: "Study anytime, anywhere." },
            { title: "Certifications", desc: "Showcase verified skills." },
          ].map((f, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card variant="outlined" sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {f.title}
                  </Typography>
                  <Typography color="text.secondary">{f.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    
      <Box sx={{ py: 4, textAlign: "center", borderTop: "1px solid #eee" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Coursera — All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Homepage;
