import { TextField } from "@mui/material"

export default function EditMarkdown(props) {

  const { text, onChangeText } = props;
  return (
    <TextField
      id="standard-textarea"
      placeholder="# タイトル"
      multiline
      variant="standard"
      value={text}
      sx={{ backgroundColor: "#121212", width: "100%", height: "100%", fontSize: "16px", coloc: "white" }}
      onChange={onChangeText}
    />
  );
}