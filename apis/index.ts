import { usersFactory } from "./usersApi";
import { tasksFactory } from "./taskApi";

const BASE_PATH =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://eunju-movie-app.netlify.app";

const usersAPIs = usersFactory({
  baseURL: `${BASE_PATH}/api/users`,
});
const taskAPIs = tasksFactory({
  baseURL: `${BASE_PATH}/api/task`,
});

export { usersAPIs, taskAPIs };
