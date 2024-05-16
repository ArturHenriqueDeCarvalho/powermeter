import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& input": {
              color: "#1F1F1F", // Replace with Colors/Neutral/Color 900
            },
            "& fieldset": {
              borderColor: "#E0E0E0", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "#FF7F0B", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF7F0B", // Border color when focused
            },
          },
          "& .MuiInputLabel-root": {
            color: "#1F1F1F", // Label color
            "&.Mui-focused": {
              color: "#1F1F1F", // Label color when focused
            },
          },
        },
      },
    },
  },
});

export default function Section6() {
  return (
    <ThemeProvider theme={theme}>
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
            userSelect: "none",
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
                    backgroundColor: "transparent",
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
                    backgroundColor: "#6EB729",
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
    </ThemeProvider>
  );
}
