import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material";

import MarkDownTemplate from "../template/MarkdownTemplate";
import EditTemplate from "../template/EditTemplate";

export default function Page1Page() {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2"
      }
    }
  });

  const [markdown, setMarkdown] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const location = useLocation();

  useEffect(() => {
    axios.get("http://localhost:5000/markdown" + location.pathname)
      .then(res => {
        if (!Object.keys(res.data).length) {
          console.log('NO-DATA');
          setMarkdown(
            {
              url: location.pathname,
              title: '',
              body: ''
            });
          setEditMode(true);
        } else {
          setMarkdown(res.data);
        }
      })
  }, [])

  const onClickMode = () => { setEditMode(!editMode) }

  console.log('MODE' + editMode);
  return (
    <ThemeProvider theme={darkTheme}>
      {editMode ?
        <EditTemplate markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} onClickMode={onClickMode} /> :
        <MarkDownTemplate markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} onClickMode={onClickMode} />}
    </ThemeProvider>
  );
}