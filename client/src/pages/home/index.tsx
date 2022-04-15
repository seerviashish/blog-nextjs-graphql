import * as React from 'react';
import { AppBarClickAction, AppBarClickActionType } from '../../@types';
import AppBar from '../../components/AppBar';

const HomePage: React.FC = () => {
  const handleAppBarClick = (action: AppBarClickAction) => {
    if (action == AppBarClickActionType.MENU) {
    }
    if (action == AppBarClickActionType.LOGOUT) {
    }
  };
  const RenderAppBar = () => {
    return <AppBar title={'Home'} onClick={handleAppBarClick}></AppBar>;
  };
  return <>{RenderAppBar()}</>;
};

export default HomePage;
