import axios from "axios";

import { IUser } from "./interface/user";
import { IFactory } from "./interface/factory";

export const usersFactory = ({ baseURL }: IFactory) => {
  // NOTE [Create]
  const createUser = async (user: IUser) => {
    return await axios
      .post(baseURL, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  };

  // NOTE [Get]
  const readUser = async () => (await axios.get(baseURL)).data;

  return {
    createUser,
    readUser,
  };
};
