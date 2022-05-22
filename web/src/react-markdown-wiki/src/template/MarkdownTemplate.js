import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

import {
  AppBar,
  Box,
  Container,
  Drawer,
} from "@mui/material";

import HeaderNavigation from "../organisms/HeaderNavigation";
import SubHeaderNavigation from "../organisms/SubHeaderNavigation";

export default function MarkDownTemplate(props) {
  const {markdown, setMarkdown, editMode, onClickMode} = props;
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
      <Drawer></Drawer>
      <Box component="main" >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Container maxWidth="xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]} styled={{ width: "100%" }}>{markdown.body}</ReactMarkdown>
          </Container >
        </Box>
      </Box>
    </Box>
  );
}