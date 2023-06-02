import axios from "axios";

import { IFactory } from "./interface/factory";
import { IMenuAPIRes } from "./interface/menu";

export const menuFactory = ({ baseURL }: IFactory) => {
  // NOTE [Get]
  const getMenus = async () => (await axios.get(baseURL)).data as IMenuAPIRes;

  return { getMenus };
};
