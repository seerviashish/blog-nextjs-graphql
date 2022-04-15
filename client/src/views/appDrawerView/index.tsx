import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '../../components/Drawer';

type Props = {
  open: boolean;
  onClickMenu: (menuId: string) => void;
  toggleDrawer: (open: boolean) => void;
};

const AppDrawerView: React.FC<Props> = (props) => {
  const { open, onClickMenu, toggleDrawer } = props;
  return (
    <Drawer
      menuItems={[
        { id: '1', title: 'Home', icon: <HomeIcon /> },
        { id: '2', title: 'Profile', icon: <AccountCircleIcon /> },
      ]}
      open={open}
      onClickMenu={onClickMenu}
      toggleDrawer={toggleDrawer}
    />
  );
};

export default AppDrawerView;
