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
          My Resent Projects
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
            <img src="https://i.ibb.co/SwtGj3b/project1.png" alt="" />
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
                href="https://saddaul-siam.github.io/food-network/"
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
                href="https://github.com/Saddaul-Siam/food-network"
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
            <img src="https://i.ibb.co/8PhD1T3/project2.png" alt="" />
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
                href="https://honda-cbr-24.netlify.app/"
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
                href="https://github.com/Saddaul-Siam/honda-cbr"
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
            <img src="https://i.ibb.co/5ThXVCY/Untitled-2.png" alt="" />
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
              Responsive Football Website
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://saddaul-siam.github.io/responsive-football/"
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
                href="https://github.com/Saddaul-Siam/responsive-football"
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
            <img src="https://i.ibb.co/WzK9HqM/project5.png" alt="" />
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
              <Button
                size="small"
                sx={{ mr: 1, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="success"
              >
                JavaScript
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Siam Store (e-commerce Website)
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://siam-store.netlify.app/"
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
                href="https://github.com/Saddaul-Siam/siam-store"
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
            <img src="https://i.ibb.co/XSN7cJz/project8.png" alt="" />
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
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Easy School (educational Website)
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://online-easy-school.netlify.app/"
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
                href="https://github.com/Saddaul-Siam/Educational-services"
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
              Pro medical (healthcare-website.)
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://pro-medical-24.web.app/"
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
                href="https://github.com/Saddaul-Siam/Pro-Medical"
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
            <img src="https://i.ibb.co/ChJDNkv/project9.png" alt="" />
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
              Tour Planners (Tourism Website)
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://roma-tourism.web.app/"
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
                href="https://github.com/Saddaul-Siam/Tour-Planners-client"
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
                href="https://github.com/Saddaul-Siam/Tour-Planners-server"
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
            <img src="https://i.ibb.co/QMh2KVs/project6.png" alt="" />
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
              Bike Buzz (e-commerce Website)
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://bike-buzz.web.app/"
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
                href="https://github.com/Saddaul-Siam/Bike-Buzz-Client"
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
                href="https://github.com/Saddaul-Siam/Bike-Buzz-Server"
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
            <img src="https://i.ibb.co/LvD14fj/projects10.png" alt="" />
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
              Doctors Portal
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://doctors-portal-24.web.app/"
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
                href="https://github.com/Saddaul-Siam/Doctor-protal-client"
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
                href="https://github.com/Saddaul-Siam/Doctor-protal-server"
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
            <img src="https://i.ibb.co/XLHCYMD/project11.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Button
                size="small"
                sx={{ ml: 2, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="error"
              >
                React
              </Button>
              <Button
                size="small"
                sx={{ mx: 1, borderRadius: "52px", cursor: "default" }}
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
                sx={{ m: 2, borderRadius: "52px", cursor: "default" }}
                variant="outlined"
                color="primary"
              >
                MongoDB
              </Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Jerins Parlour
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://jerins-parlours.web.app/"
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
                href="https://github.com/Saddaul-Siam/Jerins-parlour-client"
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
                href="https://github.com/Saddaul-Siam/Jerins-parlour-server"
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
