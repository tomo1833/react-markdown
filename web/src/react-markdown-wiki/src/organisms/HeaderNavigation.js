import { useNavigate } from "react-router-dom"

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  Typography
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';

export default function HeaderNavigation() {

  const navigate = useNavigate();

  const onClickHome = () => { navigate('/') };

  return (
    <AppBar position="relative" >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography component="div" >Markdown</Typography>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="ホーム" icon={<HomeIcon />} onClick={onClickHome} />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
}