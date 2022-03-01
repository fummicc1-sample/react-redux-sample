import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { Todo } from "../../data/todo";
import { selectTodoList } from "./todoSlice";

export const TodoPage = () => {
  const todos = useAppSelector(selectTodoList);
  return <div></div>;
};

const TodoItem = (props: Todo) => {
  return <div className="card"></div>;
};
