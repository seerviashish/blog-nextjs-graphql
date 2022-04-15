import React, { useState } from 'react';
import { AppBarClickAction, AppBarClickActionType } from '../@types';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const handleAppBarClick = (action: AppBarClickAction) => {
    if (action == AppBarClickActionType.MENU) {
      setDrawerOpen((open) => !open);
    }
    if (action == AppBarClickActionType.LOGOUT) {
    }
  };

  const handleDrawerMenuClick = (menuId: string) => {
    console.log('menuId ==> ', menuId);
  };
  const RenderAppBar = () => {
    return <AppBar title={'Home'} onClick={handleAppBarClick}></AppBar>;
  };

  const RenderDrawer = () => {
    return (
      <Drawer
        menuItems={[
          { id: '1', title: 'One' },
          { id: '2', title: 'One' },
          { id: '3', title: 'One' },
          { id: '4', title: 'One' },
          { id: '5', title: 'One' },
          { id: '6', title: 'One' },
        ]}
        open={isDrawerOpen}
        onClickMenu={handleDrawerMenuClick}
        toggleDrawer={(open: boolean) => setDrawerOpen(open)}
      />
    );
  };

  return (
    <>
      <header>{RenderAppBar()}</header>
      <main>
        {RenderDrawer()}
        {children}
      </main>
    </>
  );
};

export default Layout;
