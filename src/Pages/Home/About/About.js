import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typical from "react-typical";
import PDF from "../../../images/mahmudul-resume (2).pdf";
import image from "../../../images/FB_IMG_1611750607354.jpg";

const About = () => {
  return (
    <Container sx={{ py: 20 }} id="about">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography
            sx={{ fontFamily: "Ubuntu", fontSize: 40, fontWeight: 500 }}
          >
            About me
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "Ubuntu", pb: 5 }}>
            ----------Who i am---------
          </Typography>
        </Box>
      </Box>
      <Grid container xs={{ alignItems: "center" }} spacing={10}>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
        <Grid item sm={12} md={5} data-aos="fade-down">
          <img width="100%" src={image} alt="" />
        </Grid>
        <Grid item sm={12} md={7} data-aos="fade-up">
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: 24,
              fontWeight: 600,
              lineHeight: "4rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              {" "}
              <Box sx={{ mr: 1 }}>My Name is Mahmudul hasan and I'm a</Box>{" "}
              <Box sx={{ color: "crimson" }}>
                <Typical
                  loop={Infinity}
                  wrapper="span"
                  delay="1000"
                  steps={[
                    "Web Developer",
                    2000,
                    "Web Designer",
                    2000,
                    "Programmer",
                    2000,
                  ]}
                />
              </Box>
            </Box>
          </Typography>

          <Typography paragraph>
            I’m a Front End Web developer who is passionate about making
            error-free websites with 100% client satisfaction. I love to solve
            real-world problems. I am strategic, goal-oriented, and always work
            with an end goal in mind. I pride myself on doing quality work and
            maintaining excellent communication. Most of the time I work with
            JavaScript ReactJS
          </Typography>
          <a
            href={PDF}
            download="Resume of mahmudul-resume"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="error" sx={{ px: 4, py: 2 }}>
              Download Resume
            </Button>
          </a>
        </Grid>
        {/* </Box> */}
      </Grid>
    </Container>
  );
};

export default About;
