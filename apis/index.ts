import { usersFactory } from "./usersApi";
import { tasksFactory } from "./taskApi";
import { menuFactory } from "./menuApi";

const usersAPIs = usersFactory({
  baseURL: `api/users`,
});
const taskAPIs = tasksFactory({
  baseURL: `api/task`,
});
const menuAPIs = menuFactory({
  baseURL: `api/menu`,
});

export { taskAPIs, usersAPIs, menuAPIs };
