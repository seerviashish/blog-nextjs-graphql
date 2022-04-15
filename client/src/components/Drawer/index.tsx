import * as React from 'react';
import { Box, SwipeableDrawer } from '@mui/material';
import { DrawerProps } from '../../@types';
import MenuItems from '../MenuItems';

const Drawer: React.FC<DrawerProps> = (props) => {
  const { menuItems, onClickMenu, open, toggleDrawer } = props;
  const RenderMenuItems = () => (
    <MenuItems menuItems={menuItems} nextDivider={true} onClick={onClickMenu} />
  );
  const handleToggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      toggleDrawer(open);
    };
  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={handleToggleDrawer(false)}
        onOpen={handleToggleDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleToggleDrawer(false)}
          onKeyDown={handleToggleDrawer(false)}
        >
          {RenderMenuItems()}
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default Drawer;
