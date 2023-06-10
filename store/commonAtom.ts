import { atom } from "recoil";
// import { v1 } from "uuid";

export const menuAtom = atom<boolean>({
  key: "isMenuOpen",
  default: true,
});

export const activeMenuAtom = atom<string>({
  key: "activeMenu",
  default: "DailyTasks",
});
