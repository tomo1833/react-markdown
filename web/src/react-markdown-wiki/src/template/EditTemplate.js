import {
  Box,
  Container,
} from "@mui/material";
import { useEffect } from "react";


import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

import EditMarkdown from "../organisms/EditMarkdown";
import HeaderNavigation from "../organisms/HeaderNavigation";
import SubHeaderNavigation from "../organisms/SubHeaderNavigation";

export default function EditTemplate(props) {

  const { markdown, setMarkdown, editMode, onClickMode } = props;

  const onChangeMarkdown = (event) => {
    setMarkdown(
      {
        url: markdown.url,
        title: markdown.title,
        body: event.target.value
      });
  };

  useEffect(() => {
  }, [markdown.body]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <HeaderNavigation />
      <SubHeaderNavigation markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} onClickMode={onClickMode} />
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
              <EditMarkdown markdown={markdown} onChangeMarkdown={onChangeMarkdown} />
            </Container >
          </Box>
          <Box sx={{ width: "50%" }}>
            <Container >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown.body}</ReactMarkdown>
            </Container >
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
