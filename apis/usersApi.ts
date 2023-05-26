import axios from "axios";

import { IUser } from "./interface/usersApi";
import { IFactory } from "./interface/apiFactory";

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
