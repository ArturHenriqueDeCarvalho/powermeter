import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

export default function Section3() {
  return (
    <Container sx={{ pt: "156px" }}>
      <Grid container spacing={2} alignItems="center" sx={{ color: "#D4DAE3" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: "40px",
              color: "#FF7F0B",
              caretColor: "transparent",
              userSelect: "none",
            }}
          >
            Crie sua conta hoje para acesso gratuito às dicas exclusivas de
            economia de energia.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              margin: "20px 0",
              caretColor: "transparent",
              userSelect: "none",
              fontSize: "16px",
              fontWeight: 400
            }}
          >
            Baixe o aplicativo agora e descubra como reduzir sua conta de luz!
            No primeiro acesso, aproveite gratuitamente nossas recomendações
            personalizadas. Para continuar recebendo nossas dicas exclusivas,
            experimente um de nossos planos pensados especialmente para você.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: 3,
              caretColor: "transparent",
              userSelect: "none",
            }}
          >
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "#6EB729",
                color: "black",
                borderRadius: 50,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#009900",
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
                border: "1px solid #6EB729",
                backgroundColor: "transparent",
                color: "#6EB729",
                borderRadius: "50px",
                fontWeight: 700,
                textTransform: "none",
                padding: "10px 20px",
                "&:hover": {
                  color: "#000",
                  backgroundColor: "#00cc00",
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
              style={{
                height: "500px",
                position: "relative",
                zIndex: 1,
                caretColor: "transparent",
                userSelect: "none",
              }}
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
