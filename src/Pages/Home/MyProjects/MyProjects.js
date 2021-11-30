import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./MyProjects.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Box } from "@mui/system";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const MyProjects = () => {
  return (
    <Box
      sx={{ padding: "80px 0px", backgroundColor: "#F5F7FF", py: 20 }}
      id="projects"
      data-aos="fade-up"
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 40,
            color: "#3C3E41",
            fontFamily: "Ubuntu",
          }}
        >
          My Projects
        </Typography>
      </Box>
      <Swiper
        style={{ padding: 50 }}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={"auto"}
        // loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/F8LSsXs/best-berbar-top.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                HTML
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                CSS
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Best Berbar
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://i.ibb.co/1LYprXZ/best-berbar-bottom.png"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ml: 2, borderRadius: "52px" }}
                  variant="contained"
                  color="warning"
                >
                  Live Site
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/barber-shop"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="primary"
                >
                  Code
                </Button>
              </a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img
              src="https://i.ibb.co/dPt3rfN/food-Network-top.png[/img][/url]"
              alt=""
            />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                HTML
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                CSS
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Food Network
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://cranky-kare-e6a3da.netlify.app/"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ml: 2, borderRadius: "52px" }}
                  variant="contained"
                  color="warning"
                >
                  Live Site
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/food-network"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="primary"
                >
                  Code
                </Button>
              </a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/MSDdhL9/honda-top.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                HTML
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                CSS
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="success"
              >
                Bootstrap
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Honda CBR
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://honda-cbr-main-projects.netlify.app/"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ml: 2, borderRadius: "52px" }}
                  variant="contained"
                  color="warning"
                >
                  Live Site
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/honda-cbr"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="primary"
                >
                  Code
                </Button>
              </a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img
              src="https://i.ibb.co/Qn1sk01/Football-top.png[/img][/url]"
              alt=""
            />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                HTML
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                CSS
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="success"
              >
                Bootstrap
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Football Website
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://shohag219.github.io/football-club-assaingment-2/"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ml: 2, borderRadius: "52px" }}
                  variant="contained"
                  color="warning"
                >
                  Live Site
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/football-club-assaingment-2"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="primary"
                >
                  Code
                </Button>
              </a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/VthncpG/project7.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                React
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                Bootstrap
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                React Router
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Medilab Doctors
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://simple-ema-jhon-81a43.web.app/"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ml: 2, borderRadius: "52px" }}
                  variant="contained"
                  color="warning"
                >
                  Live Site
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/health-care-website"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="primary"
                >
                  Code
                </Button>
              </a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img
              src="https://i.ibb.co/D7YmwBH/resort-top.png[/img][/url]"
              alt=""
            />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                React
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                React Router
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="success"
              >
                Bootstrap
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="warning"
              >
                Firebase
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="secondary"
              >
                Node
              </Button>
              <Button
                size="small"
                sx={{ m: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="primary"
              >
                MongoDB
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Resort
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://travel-website-assaingment-11.web.app/"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ml: 2, borderRadius: "52px" }}
                  variant="contained"
                  color="warning"
                >
                  Live Site
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/hotel-website"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="primary"
                >
                  Client Site Code
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/hotel-website-server"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="secondary"
                >
                  Server Site Code
                </Button>
              </a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img
              src="https://i.ibb.co/BnC8m80/bike-sell-top.png[/img][/url]"
              alt=""
            />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                React
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="info"
              >
                React Router
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="success"
              >
                MaterialUI
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="warning"
              >
                Firebase
              </Button>
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="secondary"
              >
                Node
              </Button>
              <Button
                size="small"
                sx={{ m: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="primary"
              >
                MongoDB
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Dream Bike
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://bikesell-new.web.app/"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ml: 2, borderRadius: "52px" }}
                  variant="contained"
                  color="warning"
                >
                  Live Site
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/bike-sell-client"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="primary"
                >
                  Client Site Code
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Shohag219/bike-sell-server"
                rel="noReferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ m: 1, borderRadius: "52px" }}
                  variant="contained"
                  color="secondary"
                >
                  Server Site Code
                </Button>
              </a>
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MyProjects;
