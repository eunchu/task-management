export interface IMenus {
  id: number;
  name: string;
  subMenu: { id: number; name: string }[] | null;
}

export interface IMenu {
  id: number;
  name: string;
  menus: IMenus[];
  auth: "all" | "owner" | "team";
}

export interface IMenuAPIRes {
  data: IMenu[];
  status: string;
  message: string;
}
