import { usersFactory } from "./usersApi";
import { tasksFactory } from "./taskApi";

const usersAPIs = usersFactory({
  baseURL: `api/users`,
});
const taskAPIs = tasksFactory({
  baseURL: `api/task`,
});

export { taskAPIs, usersAPIs };
