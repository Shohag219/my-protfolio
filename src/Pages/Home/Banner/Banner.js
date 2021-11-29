import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import "./Banner.css";
import Typical from "react-typical";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  });
  return (
    <Box className="background" id="home">
      <Container sx={{ height: "95vh" }}>
        <Box
          data-aos="fade-right"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "95vh",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#000", fontSize: "27px", fontFamily: "Ubuntu" }}
            >
              Hello, My Name Is
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "75px",
                fontFamily: "Ubuntu",
                fontWeight: 600,
              }}
            >
              Mahmudul Hasan Shohag
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "35px",
                fontFamily: "Ubuntu",
                fontWeight: 500,
              }}
            >
              <Box sx={{ display: "flex" }}>
                {" "}
                <Box sx={{ mr: 1 }}>And I'm a</Box>{" "}
                <Box sx={{ color: "crimson" }}>
                  <Typical
                    loop={Infinity}
                    wrapper="span"
                    delay="1000"
                    steps={["Web Developer", 2000, "Web Designer", 2000]}
                  />
                </Box>
              </Box>
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{
                px: 4,
                py: 1,
                fontSize: "20px",
                fontWeight: 400,
                mt: 3,
              }}
            >
              Hire me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
