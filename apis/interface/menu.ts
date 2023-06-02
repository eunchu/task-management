interface ISubMenu {
  id: number;
  name: string;
}

export interface IMenu {
  id: number;
  name: string;
  subMenu: ISubMenu[] | null;
  auth: "all" | "owner" | "team";
}

export interface IMenuAPIRes {
  data: IMenu[];
  status: string;
  message: string;
}
