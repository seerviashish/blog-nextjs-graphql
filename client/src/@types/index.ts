import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
import type { ReactElement, ReactNode } from 'react';

export type AppBarClickAction = 'menu' | 'logout';

export enum AppBarClickActionType {
  MENU = 'menu',
  LOGOUT = 'logout',
}

export type PageState = {
  title: string;
  titleSuffix?: string;
  metaDescription: string;
};

export type MenuItem = {
  id: string;
  title: string;
  icon?: ReactNode;
};

export type MenuItemProps = {
  menuItems: MenuItem[];
  onClick: (menuId: string) => void;
  nextDivider?: boolean;
};

export type DrawerProps = {
  menuItems: MenuItem[];
  open: boolean;
  onClickMenu: (menuId: string) => void;
  toggleDrawer: (open: boolean) => void;
};

export enum LoadingType {
  PROFILE = 'Profile',
  POST = 'Post',
}

export type LoadingProps = {
  type: LoadingType;
  loading: boolean;
  width?: number;
  height?: number;
  viewBox?: string;
};

export type SignInInput = {
  email: string;
  password: string;
};

export type SignUpInput = {
  email: string;
  password: string;
};

export type ForgotPasswordInput = {
  email: string;
  recoveryHash: string;
};

export type UserInfo = {
  uid: string;
  email: string;
};

export type SessionResponseData = {
  jwt: string;
  userInfo: UserInfo;
};

export enum ResponseStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export type ResponseError = {
  code: number;
  errorMessage: string;
};

export type ApiResponse<Data> = {
  status: ResponseStatus;
  data?: Data;
  error?: ResponseError;
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
