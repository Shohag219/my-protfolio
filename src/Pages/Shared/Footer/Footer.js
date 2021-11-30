import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  const useStyle = makeStyles({
    backgroundColor: {
      backgroundColor: "#111111",
    },
  });
  const { backgroundColor } = useStyle();
  return (
    <div className={backgroundColor}>
      <Container sx={{ py: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body" sx={{ color: "#fff" }}>
            Mahmudul Hasan Shohag All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
