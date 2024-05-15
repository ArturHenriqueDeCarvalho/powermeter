import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

export default function SectionOne() {
  return (
    <Container sx={{ padding: "50px", width: "auto" }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ color: "#fff" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            Domine o <span style={{ color: "#FFA500" }}>Sol</span>: Economize e
            acompanhe sua Energia Solar em tempo real
          </Typography>
          <Typography variant="h6" component="p" sx={{ margin: "20px 0" }}>
            PowerMeter é um aplicativo para acompanhamento de energia solar e
            economia em sua fatura de energia, fornecendo controle total sobre
            seus recursos energéticos.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: "#0f0f0f" }}>
              <img src="./assets/buttonAppStore.png" alt="App Store" />
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#0f0f0f" }}>
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
              style={{ height: "400px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={5}
        alignItems="center"
        sx={{ backgroundColor: "#fff", color: "#000" }}
      >
        <Box sx={{ textAlign: "center", marginTop: "50px" }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold" }}>
            Conheça nossos principais serviços
          </Typography>
          <Grid container spacing={4} sx={{ marginTop: "30px" }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    paddingBottom: 2,
                  }}
                >
                  <img src="./assets/solar_power.png" alt="Icon solar" />
                </Box>
                Gestão de Solar
              </Typography>
              <Typography variant="body1" component="p">
                Monitore em tempo real a produção de energia e otimize seu
                projeto.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    paddingBottom: 2,
                  }}
                >
                  <img
                    src="./assets/qr_code_scanner.png"
                    alt="QR Code Scanner"
                  />
                </Box>
                Gestão de Faturas
              </Typography>
              <Typography variant="body1" component="p">
                Avalie seu consumo e descubra como reduzir sua conta de energia
                eficientemente.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
