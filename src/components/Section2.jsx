import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";

export default function Section2() {
  return (
    <Box
      sx={{
        backgroundColor: "#F4F6F8",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: "156px" }}>
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{
            backgroundColor: "#F4F6F8",
            color: "#000",
            paddingBottom: 8,
            borderRadius: 5,
          }}
        >
          <Box sx={{ textAlign: "center", marginTop: "80px" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 700, fontSize: 40 }}
            >
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
                  Avalie seu consumo e descubra como reduzir sua conta de
                  energia eficientemente.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
