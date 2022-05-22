import { useState, useEffect } from "react";

import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";


import axios from 'axios';

import HeaderNavigation from "../organisms/HeaderNavigation";
import { Link } from "react-router-dom";

export default function HomeTemplate() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2"
      }
    }
  });

  const [text, setText] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/markdown')
      .then(res => setText(res.data))
  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh"
        }}
      >
        <HeaderNavigation />
        <Box component="main" >
          <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column" }}>
            {text.map((markdown) => {
              return (
                <Link key={markdown.url} to={markdown.url}>
                  {markdown.title}
                </Link>
              )
            })}
          </Container >
        </Box>
      </Box>
    </ThemeProvider>
  );
}
