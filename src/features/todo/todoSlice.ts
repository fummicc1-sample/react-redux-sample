import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Todo } from "../../data/todo";

export interface TodoState {
  list: Todo[];
  newTodo: Todo | null;
}

const initialState: TodoState = {
  list: [
    {
      title: "Title 1",
      deadline: new Date(),
      status: "todo",
    },
    {
      title: "Title 2",
      deadline: new Date(),
      status: "todo",
    },
    {
      title: "Title 3",
      deadline: new Date(),
      status: "todo",
    },
    {
      title: "Title 4",
      deadline: new Date(),
      status: "todo",
    },
    {
      title: "Title 5",
      deadline: new Date(),
      status: "todo",
    },
  ],
  newTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateNewTitle: (state: TodoState, action: PayloadAction<string>) => {
      if (state.newTodo != null) state.newTodo.title = action.payload;
    },
    updateNewDeadline: (state: TodoState, action: PayloadAction<Date>) => {
      if (state.newTodo != null) state.newTodo.deadline = action.payload;
    },
    clearNewTodo: (state: TodoState) => {
      state.newTodo = null;
    },
    updateList: (state: TodoState, action: PayloadAction<Todo[]>) => {
      state.list = action.payload;
    },
  },
});

export const { updateNewTitle, updateNewDeadline, updateList } =
  todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.list;

export default todoSlice.reducer;
