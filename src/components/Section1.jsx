import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

export default function Section1() {
  // Função para impedir o download de imagens
  const handleImageClick = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg" sx={{ pt: "156px", cursor: "default" }}>
      <Grid container spacing={2} alignItems="center" sx={{ color: "#fff" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: "40px",
              userSelect: "none",
              caretColor: "transparent",
            }}
          >
            Domine o <span style={{ color: "#FF7F0B" }}>Sol</span>: Economize e
            acompanhe sua Energia Solar em tempo real
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "#D4DAE3",
              margin: "20px 0",
              pt: "24px",
              userSelect: "none",
            }}
          >
            PowerMeter é um aplicativo para acompanhamento de energia solar e
            economia em sua fatura de energia, fornecendo controle total sobre
            seus recursos energéticos.
          </Typography>
          <Box
            sx={{ display: "flex", gap: 2, marginTop: 3, mb: 16, pt: "48px" }}
          >
            <Button>
              <img
                src="./assets/buttonAppStore.svg"
                alt="App Store"
                sx={{ cursor: "default" }}
                onClick={handleImageClick} // Impede o download da imagem
              />
            </Button>
            <Button>
              <img
                src="./assets/buttonGooglePlay.svg"
                alt="Google Play"
                onClick={handleImageClick} // Impede o download da imagem
              />
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "right" }}
        >
          <Box sx={{ display: "flex", gap: 4, userSelect: "none" ,}}>
            <img
              src="./assets/banner1.png"
              alt="Banner Two iPhone"
              style={{ height: "500px" }}
              onClick={handleImageClick} // Impede o download da imagem
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
