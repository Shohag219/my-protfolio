import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./MySkills.css";

const MYSkills = () => {
  return (
    <Container sx={{ py: 20 }} id="skills">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ fontFamily: "Ubuntu", fontSize: 40, fontWeight: 500 }}
        >
          My skills
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: "Ubuntu", pb: 5 }}>
          ---What i know---
        </Typography>
      </Box>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} data-aos="fade-down">
          <Typography
            sx={{ fontFamily: "Ubuntu", py: 2, fontWeight: 600, fontSize: 28 }}
          >
            My creative skills & experiences.
          </Typography>
          <Typography sx={{ py: 2, fontWeight: 500, fontSize: 18, pb: 5 }}>
            Why Choose Me?
            <br />
            ✔ Many clients are happy after working with me.
            <br />
            ✔ I will revise until your satisfaction
            <br />
            ✔ Customer Satisfaction is my First Priority
            <br />
            <br />
            My Service:
            <br />
            ✅ Web Development / Customization
            <br />
            ✅ e-commerce Development / Customization
            <br />
            ✅ Web Design
            <br />
            ✅ JavaScript /React/ HTML5 / CSS3/ Bootstrap /Material UI
            <br />
            ✅ Photoshop
            <br />
            <br />
            For Instant Inquiry:
            <br />
            <br />
            ☑ Email: mahmudulhasanshohag219@gmail.com
            <br />
            <br />
            Full and fresh hand code is my power. Client satisfaction is my
            first priority. Work with me and be happy with the result.
          </Typography>
          <Button variant="contained" color="error" sx={{ px: 3, py: 1 }}>
            Red more
          </Button>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <p>HTML</p>
          <div class="container">
            <div class="skills html">95%</div>
          </div>

          <p>CSS</p>
          <div class="container">
            <div class="skills css">95%</div>
          </div>

          <p>JavaScript</p>
          <div class="container">
            <div class="skills js">90%</div>
          </div>

          <p>React</p>
          <div class="container">
            <div class="skills react">95%</div>
          </div>
          <p>Bootstrap</p>
          <div class="container">
            <div class="skills bootstrap">95%</div>
          </div>
          <p>Material UI</p>
          <div class="container">
            <div class="skills materialUI">85%</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MYSkills;
