import React, { useState } from "react";
import {
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { Todo } from "../../data/todo";
import { selectTodoList, updateNewTitle } from "./todoSlice";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../app/hooks";

import styles from "./Todo.module.css";
import { useDispatch } from "react-redux";

export const TodoPage = () => {
  const todos = useAppSelector(selectTodoList).map((todo) => TodoItem(todo));
  const displatch = useAppDispatch();
  return (
    <Box margin={4}>
      <Typography variant="h3">Hello, This is React Redux Todo.</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <List>{todos}</List>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={{ displatch(updateNewTitle); }}
          ></TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

const TodoItem = (props: Todo) => {
  return (
    <div className="card">
      <ListItemButton>
        <ListItemText primary={props.title}></ListItemText>
        <ListItemText primary={props.deadline.toISOString()}></ListItemText>
      </ListItemButton>
    </div>
  );
};
