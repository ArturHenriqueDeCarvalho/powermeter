import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";

export default function Section6() {
  return (
    <Box
      sx={{
        backgroundColor: "#F4F6F8",
      }}
    >
      <Container
        sx={{
          pt: "78px",
          pb: "78px",
          borderRadius: 5,
        }}
      >
        <Grid container spacing={2} alignItems="center">
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
                src="./assets/banner3.png"
                alt="Banner Two iPhone"
                style={{ height: "500px", position: "relative", zIndex: 1 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
                padding: "20px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#1b2027",
                }}
              >
                Contate-nos
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: "16px", color: "#3B414A" }}
              >
                Preencha os campos abaixo
              </Typography>
              <TextField
                fullWidth
                label="Nome"
                variant="outlined"
                margin="normal"
                sx={{
                  backgroundColor: "#F9F9FF",
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                sx={{
                  backgroundColor: "#F9F9FF",
                }}
              />
              <TextField
                fullWidth
                label="Por favor, coloque sua mensagem aqui..."
                variant="outlined"
                margin="normal"
                multiline
                rows={5}
                sx={{
                  backgroundColor: "#F9F9FF",
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  marginTop: "16px",
                  backgroundColor: "#00cc00",
                  color: "#000",
                  fontWeight: 700,
                  borderRadius: "25px",
                  textTransform: "none",
                  padding: "10px 0",
                  "&:hover": {
                    backgroundColor: "#009900",
                  },
                }}
              >
                Enviar mensagem
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
