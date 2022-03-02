import {
  Button,
  Grid,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Todo } from "../../data/todo";
import {
  createNewTodo,
  selectTodoList,
  updateNewTitle,
  selectNewTodo,
} from "./todoSlice";
import { Box } from "@mui/system";
import { GoNote } from "react-icons/go";

export const TodoPage = () => {
  const todos = useAppSelector(selectTodoList);
  const newTodo = useAppSelector(selectNewTodo);
  const todoDomList = todos.map((todo: Todo, index: number) => (
    <div>
      <TodoItem
        id={todo.id}
        title={todo.title}
        deadline={todo.deadline}
        status={todo.status}
        key={todo.id}
      />
    </div>
  ));
  const dispatch = useAppDispatch();
  return (
    <Box margin={4}>
      <Typography variant="h3">Hello, This is React Redux Todo.</Typography>
      <Box margin={2}>
        <Grid container spacing={1} direction="row">
          <Grid container direction="row" spacing={0.8} justifyContent="left">
            {todoDomList.map((item) => (
              <Grid item>{item}</Grid>
            ))}
          </Grid>
          <Grid item>
            <Box sx={{ height: 24 }} />
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={() => dispatch(updateNewTitle)}
              >
                {newTodo.title}
              </TextField>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                endIcon={<GoNote />}
                onClick={() => {
                  console.log("OnClick");
                  dispatch(createNewTodo);
                  console.log("Completed");
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useTodoStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F8A602",
    borderRadius: 12,
    color: "black",
  },
}));

const TodoItem = (props: Todo) => {
  const style = useTodoStyles();
  return (
    <div className={style.root}>
      <ListItemButton>
        <ListItemText primary={props.title}></ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary={props.deadline.toLocaleString("ja-JP")}
        ></ListItemText>
      </ListItemButton>
    </div>
  );
};
