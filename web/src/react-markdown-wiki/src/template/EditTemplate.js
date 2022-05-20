import {
  AppBar,
  Box,
  createTheme,
  ThemeProvider,
  Toolbar,
  Container,
  Button
} from "@mui/material";

import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import axios from 'axios';
import HeaderNavigation from "../organisms/HeaderNavigation";
import EditMarkdown from "../organisms/EditMarkdown";

import SaveIcon from '@mui/icons-material/Save';

export default function EditTemplate() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2"
      }
    }
  });

  const [text, setText] = useState("");

  const onChangeText = (event) => setText(event.target.value);

  useEffect(() => {
    axios.get('http://localhost:5000/markdown')
      .then(res => {
        setText(res.data.body)
      })
  }, [])

  const onClickText = () => {
    const markdown = {
      body: text
    };
    axios.post(`http://localhost:5000/markdown`, markdown)
      .then(res => {
        console.log(res.data);
      })
  };


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
        <Box component="main" >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Box
              sx={{
                height: "100vh",
                width: "50%",
                backgroundColor: "#121212"
              }}
            >
              <Container >
              <Button variant="contained" onClick={onClickText} startIcon={<SaveIcon />}>保存</Button>
                <br />
                <EditMarkdown text={text} onChangeText={onChangeText} />
              </Container >
            </Box>

            <Box sx={{ width: "50%" }}>
              <Container >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
              </Container >
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
