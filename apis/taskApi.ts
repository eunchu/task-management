import axios from "axios";

import { IFactory } from "./interface/factory";
import { ITask, ITasksAPIRes } from "./interface/task";

export const tasksFactory = ({ baseURL }: IFactory) => {
  // NOTE [Get]
  const getTasks = async () => (await axios.get(baseURL)).data as ITasksAPIRes;

  // NOTE [Create]
  const createTask = async (task: ITask) => {
    return axios
      .post(baseURL, task, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  };

  // NOTE [Update]
  const updateTask = async (task: ITask) =>
    await axios
      .put(baseURL, task, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);

  return { getTasks, createTask, updateTask };
};
