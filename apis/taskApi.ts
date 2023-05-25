import axios from "axios";

import { IFactory } from "./interface/apiFactory";
import { ITasksAPIRes } from "./interface/taskApi";

export const tasksFactory = ({ baseURL }: IFactory) => {
  const getTasks = async () => (await axios.get(baseURL)).data as ITasksAPIRes;

  const createTask = async (task: any) => {
    return axios
      .post(baseURL, task, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  };

  return { getTasks, createTask };
};
