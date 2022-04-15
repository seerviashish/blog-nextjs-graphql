import * as React from 'react';
import { AppBarClickAction, AppBarClickActionType } from '../../@types';
import UAppBar from '../../components/UAppBar';

const HomePage: React.FC = () => {
    const handleAppBarClick = (action: AppBarClickAction) => {
        if (action == AppBarClickActionType.MENU) {
        }
        if (action == AppBarClickActionType.LOGOUT) {
        }
    }
    const RenderAppBar = () => {
        return <UAppBar title={"Home"} onClick={handleAppBarClick}></UAppBar>
    }
    return <>{RenderAppBar()}</>
}