import { useNavigate } from "react-router-dom"

import {
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  Typography
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';

export default function HeaderNavigation() {

  const navigate = useNavigate();

  const onClickHome = () => { navigate('/') };
  const onClickPage1 = () => { navigate('/page1') };
  const onClickPage2 = () => { navigate('/page2') };

  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography component="div" >Markdown</Typography>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="ホーム" icon={<HomeIcon />} onClick={onClickHome} />
        <BottomNavigationAction label="ページ1" icon={<PageviewIcon />} onClick={onClickPage1} />
        <BottomNavigationAction label="ページ2" icon={<EditIcon />} onClick={onClickPage2} />
      </BottomNavigation>
    </Toolbar>
  );
}