import { Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const MyServices = () => {
  const useStyle = makeStyles({
    backgroundColor: {
      backgroundColor: "#111111",
    },
    card: {
      backgroundColor: "#222222",
      color: "white",
      height: "410px",
      padding: "24px",
      transition: "0.5s",
      "&:hover": {
        background: "#DC143C !important",
        color: "#fff !important",
      },
    },
  });
  const { backgroundColor, card } = useStyle();
  return (
    <div className={backgroundColor} id="services">
      <Container sx={{ py: 20 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: 40,
              fontWeight: 500,
              color: "white",
            }}
          >
            My Services
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}
          >
            --------What i provide--------
          </Typography>
        </Box>

        <Grid container spacing={5} sx={{ py: 5 }}>
          <Grid item xs={12} md={4}>
            <Paper className={card} elevation={0} data-aos="flip-left">
              <img
                width="100%"
                height="200px"
                src="https://i.ibb.co/qp5zsZY/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer.jpg"
                alt=""
              />
              <Typography variant="h5">Web Designing</Typography>
              <Typography variant="body1" sx={{ pt: 2 }}>
                I am expert in web designing. I can add functionality besides
                designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js,
                React JS for it. You can see some of my works below
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={card} elevation={0} data-aos="flip-left">
              <img
                width="100%"
                height="200px"
                src="https://i.ibb.co/z53M2GV/download.png"
                alt=""
              />
              <Typography variant="h5">MERN Stack Developer</Typography>
              <Typography variant="body1" sx={{ pt: 2 }}>
                I am a MERN stack web developer. I use MongoDB for database and
                Express JS, Node Js for server side work. You can see i have
                done some MERN project.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={card} elevation={0} data-aos="flip-left">
              <img
                width="100%"
                height="200px"
                src="https://i.ibb.co/K7hgRwH/download.jpg"
                alt=""
              />
              <Typography variant="h5">PSD To HTML</Typography>
              <Typography variant="body1" sx={{ pt: 2 }}>
                I can covert any PSD design to a responsive webpage. I use HTML,
                CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of
                my works in portfolio tab in this website
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MyServices;
