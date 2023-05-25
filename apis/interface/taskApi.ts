export interface ITask {
  id: number;
  order: number;
  title: string;
  desc: string;
  createDate: string;
  label: {
    name: string;
    desc: string;
    color: {
      text: string;
      bg: string;
    };
  };
  owner: string;
  assignees: { id: number; name: string; profileImg: string | null }[];
  issueType: string;
}

export interface ITasksAPIRes {
  data: ITask[];
  status: string;
  message: string;
}
