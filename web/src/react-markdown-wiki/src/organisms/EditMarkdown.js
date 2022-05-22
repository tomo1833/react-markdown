import { TextField } from "@mui/material"

export default function EditMarkdown(props) {

    const { markdown, onChangeMarkdown } = props;

    return (
        <TextField
            id="standard-textarea"
            placeholder="# タイトル"
            multiline
            variant="standard"
            value={markdown.body}
            sx={{ backgroundColor: "#121212", width: "100%", height: "100%", fontSize: "16px", coloc: "white" }}
            onChange={onChangeMarkdown}
        />
    );
}