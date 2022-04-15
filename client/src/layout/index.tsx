import React, { useContext, useState } from 'react';
import { AppBarClickAction, AppBarClickActionType } from '../@types';
import AppBar from '../components/AppBar';
import { useRouter } from 'next/router';
import AppDrawerView from '../views/appDrawerView';
import { SessionContext } from '../utils/provider/SessionProvider';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const { logOut } = useContext(SessionContext);
  const router = useRouter();
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const handleAppBarClick = (action: AppBarClickAction) => {
    if (action == AppBarClickActionType.MENU) {
      setDrawerOpen((open) => !open);
    }
    if (action == AppBarClickActionType.LOGOUT) {
      logOut && logOut();
    }
  };

  const handleDrawerMenuClick = (menuId: string) => {
    if (menuId === '1') {
      router.replace('/');
    }
    if (menuId === '2') {
      router.replace('/profile');
    }
  };
  const RenderAppBar = () => {
    return <AppBar title={'Home'} onClick={handleAppBarClick}></AppBar>;
  };

  const RenderDrawer = () => {
    return (
      <AppDrawerView
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
