import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Todo } from "../../data/todo";

export interface TodoState {
  list: Todo[];
  newTodo: Todo | null;
}

const initialState: TodoState = {
  list: [],
  newTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateNewTitle: (state: TodoState, action: PayloadAction<string>) => {},
    updateNewDeadline: (state: TodoState, action: PayloadAction<Date>) => {},
    updateList: (state: TodoState, action: PayloadAction<Todo[]>) => {},
  },
});

export const { updateNewTitle, updateNewDeadline, updateList } =
  todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.list;

export default todoSlice.reducer;
