import React, { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./Footer";
import { Grow, Box } from "@mui/material";

function ScrollAnimation({ children }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(ref.current); // Stop observing once visible
          }
        });
      },
      { threshold: 0.3 } // Ajuste conforme necessário
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Grow in={visible} timeout={1000}>
      <Box ref={ref}>{children}</Box>
    </Grow>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <Section1 />
      <ScrollAnimation>
        <Section2 />
      </ScrollAnimation>
      <ScrollAnimation>
        <Section3 />
      </ScrollAnimation>
      <ScrollAnimation>
        <Section4 />
      </ScrollAnimation>
      <ScrollAnimation>
        <Section5 />
      </ScrollAnimation>
      <ScrollAnimation>
        <Section6 />
      </ScrollAnimation>
      <Footer />
    </>
  );
}
