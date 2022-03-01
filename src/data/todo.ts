export interface Todo {
  title: string;
  status: "done" | "wip" | "todo";
  deadline: Date;
}
