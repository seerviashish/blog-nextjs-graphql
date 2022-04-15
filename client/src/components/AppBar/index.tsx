import * as React from 'react';
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarClickAction } from '../../@types';

type Props = {
  title?: string;
  onClick: (action: AppBarClickAction) => void;
};

const AppBar: React.FC<Props> = (props) => {
  const { title, onClick } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => onClick('menu')}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit" onClick={() => onClick('logout')}>
            Logout
          </Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
