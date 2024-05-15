import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#FF7F0B",
        padding: "50px 0",
        color: "#1E2125",
        pt: "78px",
      }}
    >
      <Container maxWidth="lg" justifyContent="space-beetwen">
        <Box alignContent="center" justifyContent="center" alignItems="center">
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  gap: "8px",
                  borderBottom: "1px solid #1E2125",
                  pb: 5,
                }}
              >
                <img
                  src="./assets/logo2.png"
                  alt="PowerMeter Logo"
                  style={{ height: "40px", marginRight: "8px" }}
                />
              </Box>
              <Typography variant="h6">PowerMeter</Typography>
              <Typography variant="p" sx={{ fontSize: "14px" }}>
                PowerMeter © 2024. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}></Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography
                variant="body2"
                sx={{ marginBottom: "8px", fontSize: "18px", fontWeight: 700 }}
              >
                Baixe o aplicativo
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  pb: 2,
                  marginBottom: "16px",
                  borderBottom: "1px solid #1E2125",
                }}
              >
                <Button>
                  <img
                    src="./assets/buttonAppStore.png"
                    alt="App Store"
                    style={{ height: "40px" }}
                  />
                </Button>
                <Button>
                  <img
                    src="./assets/buttonGooglePlay.png"
                    alt="Google Play"
                    style={{ height: "40px" }}
                  />
                </Button>
              </Box>
              <Typography
                variant="body2"
                sx={{ marginBottom: "8px", fontSize: "18px", fontWeight: 600 }}
              >
                Nos acompanhe
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "8px" }}
              >
                <IconButton
                  href="https://www.youtube.com"
                  target="_blank"
                  sx={{ color: "#1E2125" }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  href="https://www.facebook.com"
                  target="_blank"
                  sx={{ color: "#1E2125" }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://www.twitter.com"
                  target="_blank"
                  sx={{ color: "#1E2125" }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com"
                  target="_blank"
                  sx={{ color: "#1E2125" }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com"
                  target="_blank"
                  sx={{ color: "#1E2125" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
