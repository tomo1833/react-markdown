import { useEffect } from "react";

import axios from "axios";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import SaveIcon from '@mui/icons-material/Save';


export default function SubHeaderNavigation(props) {

  const { markdown, setMarkdown, editMode, onClickMode } = props;

  const onClickSaveMarkdown = () => {
    axios.post(`http://localhost:5000/markdown`, markdown)
      .then(res => {
        console.log(res.data);
      })
  };

  const onClickUpdateMarkdown = () => {
    axios.put(`http://localhost:5000/markdown` + markdown.url, markdown)
      .then(res => {
        console.log(res.data);
      })
  };

  const onChangeURL = (event) => {

    markdown.url = event.target.value;
    setMarkdown(
      {
        url: event.target.value,
        title: markdown.title,
        body: markdown.body
      });
  };

  const onChangeTitle = (event) => {
    setMarkdown(
      {
        url: markdown.url,
        title: event.target.value,
        body: markdown.body
      });
  };

  useEffect(() => {
  }, [markdown.url, markdown.title]);

  return (
    <Box>
      <Toolbar sx={{ backgroundColor: "#1976d2", display: "flex", justifyContent: "space-between" }}>
        {editMode ? <TextField label="URL" value={markdown.url} onChange={onChangeURL}></TextField> : <Typography>{markdown.url}</Typography>}
        {editMode ? <TextField label="TITLE" value={markdown.title} onChange={onChangeTitle}></TextField> : <Typography>{markdown.title}</Typography>}
        <BottomNavigation showLabels sx={{ backgroundColor: "#1976d2" }}>
          {editMode ?
            [<BottomNavigationAction label="表示" icon={<PageviewIcon />} onClick={onClickMode} />,
            <BottomNavigationAction label="新規登録" icon={<SaveIcon />} onClick={onClickSaveMarkdown} />,
            <BottomNavigationAction label="更新" icon={<SaveIcon />} onClick={onClickUpdateMarkdown} />].map((component) => component)
            :
            <BottomNavigationAction label="編集" icon={<EditIcon />} onClick={onClickMode} />
          }
        </BottomNavigation>
      </Toolbar>
    </Box>
  );
}
