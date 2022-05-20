import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

import axios from 'axios';

import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Drawer,
  ThemeProvider,
  Toolbar
} from "@mui/material";

import HeaderNavigation from "../organisms/HeaderNavigation";
import { useLocation } from "react-router-dom";

export default function MarkDownTemplate() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2"
      }
    }
  });

  const [text, setText] = useState("");
  
  const location = useLocation();

  useEffect(() => {

    axios.get("http://localhost:5000/markdown"+location.pathname)
      .then(res => {
        setText(res.data)
      })
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
        <AppBar position="relative" >
          <HeaderNavigation />
        </AppBar>
        <Box >
          <Toolbar sx={{ backgroundColor: "#1976d2" }}>サブヘッダ</Toolbar>
        </Box>
        <Drawer></Drawer>
        <Box component="main" >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Container maxWidth="xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]} styled={{ width: "100%" }}>{text.body}</ReactMarkdown>
            </Container >
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}