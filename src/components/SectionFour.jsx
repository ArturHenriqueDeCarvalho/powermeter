import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SectionFour() {
  return (
    <Container
      sx={{
        pt: "78px",
        borderTop: "1px solid #EAEDF1",
      }}
    >
        <Box sx={{ margin: "0 auto", backgroundColor: "#0F1A20", pb: "78px" }}>
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "#0F1A20", color: "#D4DAE3" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              O uso gratuito é limitado?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sim, você pode monitorar a energia solar gratuitamente. No
              entanto, o acesso gratuito é limitado à gestão de faturas. Para
              obter acesso a mais recursos, é necessário assinar um plano, e
              cuidaremos de tudo automaticamente.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#0F1A20", color: "#D4DAE3" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              Posso digitar a chave manualmente?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sim, você pode digitar a chave manualmente através da interface do
              aplicativo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#0F1A20", color: "#D4DAE3" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              Tem limite de contratos para usar um plano?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sim, cada plano tem um limite de contratos que pode ser
              gerenciado. Consulte os detalhes do plano para mais informações.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#0F1A20", color: "#D4DAE3" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              Como colocar a fatura automática?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para configurar a fatura automática, acesse as configurações do
              seu plano e habilite a opção de fatura automática.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
