import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

export default function SectionTwo() {
  return (
    <Container sx={{ padding: "50px", width: "auto" }}>
      <Grid container spacing={2} alignItems="center" sx={{ color: "#fff" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#FF7F0B" }}
          >
            Crie sua conta hoje para acesso gratuito às dicas exclusivas de
            economia de energia.
          </Typography>
          <Typography variant="h6" component="p" sx={{ margin: "20px 0" }}>
            Baixe o aplicativo agora e descubra como reduzir sua conta de luz!
            No primeiro acesso, aproveite gratuitamente nossas recomendações
            personalizadas. Para continuar recebendo nossas dicas exclusivas,
            experimente um de nossos planos pensados especialmente para você.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "#00ff00",
                color: "black",
                borderRadius: 50,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#00cc00",
                },
              }}
            >
              Baixar aplicativo
              <img src="/assets/arrowRight.png" style={{ height: 15 }} />
            </Button>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "flex" },
                border: "2px solid #00cc00",
                backgroundColor: "#0f0f0f",
                color: "#00cc00",
                borderRadius: "50px",
                fontWeight: 700,
                textTransform: "none",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#0f0f0f",
                },
              }}
            >
              Contate-nos
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="./assets/banner2.png"
              alt="Banner Two iPhone"
              style={{ height: "400px", position: "relative", zIndex: 1 }}
            />
            <img
              src="./assets/flor_banner2.png"
              alt="Banner Two iPhone"
              style={{
                height: "300px",
                position: "absolute",
                bottom: -64,
                left: 48,
                zIndex: 2,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
