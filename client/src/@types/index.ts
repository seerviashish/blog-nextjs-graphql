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
