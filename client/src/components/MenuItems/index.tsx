import * as React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { MenuItemProps } from '../../@types';

const MenuItems: React.FC<MenuItemProps> = (props) => {
  const { menuItems, onClick, nextDivider } = props;
  return (
    <React.Fragment>
      <List>
        {menuItems.map((menuItem) => (
          <ListItem
            button
            key={menuItem.id}
            onClick={() => onClick(menuItem.id)}
          >
            {menuItem?.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon>}
            <ListItemText primary={menuItem.title} />
          </ListItem>
        ))}
      </List>
      {nextDivider && <Divider />}
    </React.Fragment>
  );
};

export default MenuItems;
