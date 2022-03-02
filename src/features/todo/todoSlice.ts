import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Todo } from "../../data/todo";

export interface TodoState {
  list: Todo[];
  newTodo: Todo;
}

const initialState: TodoState = {
  list: [
    {
      id: 1,
      title: "Title 1",
      deadline: new Date("2022-03-01T12:00:00Z"),
      status: "todo",
    },
    {
      id: 2,
      title: "Title 2",
      deadline: new Date("2022-03-01T12:00:00Z"),
      status: "todo",
    },
    {
      id: 3,
      title: "Title 3",
      deadline: new Date("2022-03-01T12:00:00Z"),
      status: "todo",
    },
    {
      id: 4,
      title: "Title 4",
      deadline: new Date("2022-03-01T12:00:00Z"),
      status: "todo",
    },
    {
      id: 5,
      title: "Title 5",
      deadline: new Date("2022-03-01T12:00:00Z"),
      status: "todo",
    },
  ],
  newTodo: {
    id: -1,
    title: "",
    deadline: new Date("2022-03-01T12:00:00Z"),
    status: "todo",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateNewTitle: (state: TodoState, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.newTodo.title = action.payload;
    },
    updateNewDeadline: (state: TodoState, action: PayloadAction<Date>) => {
      state.newTodo.deadline = action.payload;
    },
    clearNewTodo: (state: TodoState) => {
      state.newTodo.id = -1;
      state.newTodo.title = "";
      state.newTodo.deadline = new Date("2022-03-01T12:00:00Z");
      state.newTodo.status = "todo";
    },
    appendNewTodo: (state: TodoState) => {
      state.list.push(state.newTodo);
      state.newTodo.title = "";
      state.newTodo.deadline = new Date("2022-03-01T12:00:00Z");
      state.newTodo.status = "todo";
    },
  },
});

export const createNewTodo = (): AppThunk => (dispatch, getState) => {
  getState();
  console.log("Test");
  dispatch(appendNewTodo);
  console.log("Test appendNewTodo pass");
  getState();
  console.log("Test getState pass");
  dispatch(clearNewTodo);
  console.log("Test clearNewTodo pass");
};

export const {
  updateNewTitle,
  updateNewDeadline,
  appendNewTodo,
  clearNewTodo,
} = todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.list;
export const selectNewTodo = (state: RootState) => state.todo.newTodo;

export default todoSlice.reducer;
