import { taskAPIs } from "@/apis";
import { queryKeys } from "@/apis/query-keys";
import React from "react";
import { useQuery } from "react-query";

const Main = () => {
  const {} = useQuery(queryKeys.taskKeyById("[GET]All"), () =>
    taskAPIs.getTasks()
  );

  return <div>main</div>;
};

export default Main;
