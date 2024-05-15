import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

export default function Section1() {
  return (
    <Container maxWidth="lg" sx={{ pt: "156px" }}>
      <Grid container spacing={2} alignItems="center" sx={{ color: "#fff" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 700, fontSize: "40px" }}
          >
            Domine o <span style={{ color: "#FF7F0B" }}>Sol</span>: Economize e
            acompanhe sua Energia Solar em tempo real
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: "#D4DAE3", margin: "20px 0" }}
          >
            PowerMeter é um aplicativo para acompanhamento de energia solar e
            economia em sua fatura de energia, fornecendo controle total sobre
            seus recursos energéticos.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: 3, mb: 16 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0f0f0f",
                "&:hover": {
                  backgroundColor: "#FF7F0B",
                },
              }}
            >
              <img src="./assets/buttonAppStore.png" alt="App Store" />
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0f0f0f",
                "&:hover": {
                  backgroundColor: "#FF7F0B",
                },
              }}
            >
              <img src="./assets/buttonGooglePlay.png" alt="Google Play" />
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "right" }}
        >
          <Box sx={{ display: "flex", gap: 4 }}>
            <img
              src="./assets/banner1.png"
              alt="Banner Two iPhone"
              style={{ height: "500px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
