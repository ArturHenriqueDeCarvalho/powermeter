import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Section4() {
  return (
    <Container sx={{ pt: "156px" }}>
      <Box sx={{ textAlign: "center", color: "#fff" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "#FF7F0B", marginBottom: "20px", fontWeight: 700 }}
        >
          Conheça nossos planos
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#D4DAE3", marginBottom: "40px" }}
        >
          Veja abaixo nossos planos focados em satisfazer exatamente suas
          necessidades.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {/* Card Plano 29$ */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#F4F6F8",
              color: "#000",
              borderRadius: "16px",
              padding: "40px",
              textAlign: "center",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 700, fontSize: 24 }}
            >
              Basic
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: 700, fontSize: 48 }}
            >
              R$29
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#768293" }}>
              Grátis primeira análise
            </Typography>
            <Button
              variant="contained"
              sx={{
                mb: 5,
                borderRadius: "25px",
                border: "1px solid #00cc00",
                color: "#000",
                fontWeight: 700,
                width: "80%",
                height: "3rem",
                backgroundColor: "#F4F6F8",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#00cc00",
                },
              }}
            >
              Assinar
            </Button>
            <Box
              sx={{
                textAlign: "left",
                color: "#3B414A",
                fontWeight: 700,
                borderTop: "1px solid #e0e0e0",
                fontFamily: "Montserrat",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Análise detalhada mensal das faturas
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Análise mensal da fatura
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Até 6 contratos
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Cancele quando quiser
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Card Plano 59$ */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#F4F6F8",
              color: "#000",
              borderRadius: "16px",
              padding: "40px",
              textAlign: "center",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 700, fontSize: 24 }}
            >
              Plus
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: 700, fontSize: 48 }}
            >
              R$59
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#768293" }}>
              Grátis primeira análise
            </Typography>
            <Button
              variant="contained"
              sx={{
                mb: 5,
                borderRadius: "25px",
                backgroundColor: "#00cc00",
                color: "#000",
                fontWeight: 700,
                width: "80%",
                height: "3rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#009900",
                },
              }}
            >
              Assinar
            </Button>
            <Box
              sx={{
                textAlign: "left",
                color: "#3B414A",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderTop: "1px solid #e0e0e0",
                fontWeight: 700,
                fontFamily: "Montserrat",
              }}
            >
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#000",
                    backgroundColor: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Análise detalhada mensal das faturas
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#000",
                    backgroundColor: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Análise mensal da fatura
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#000",
                    backgroundColor: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Até 10 contratos
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#000",
                    backgroundColor: "#00cc00",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                Cancele quando quiser
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          mt: "120px",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: "40px", paddingBottom: "78px" }}
        >
          Perguntas mais frequentes
        </Typography>
      </Box>
    </Container>
  );
}
