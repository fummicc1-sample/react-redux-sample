import {
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { Todo } from "../../data/todo";
import {
  createNewTodo,
  selectTodoList,
  updateNewTitle,
  selectNewTodo,
} from "./todoSlice";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../app/hooks";
import { GoNote } from "react-icons/go";

export const TodoPage = () => {
  const todos = useAppSelector(selectTodoList);
  const newTodo = useAppSelector(selectNewTodo);
  const todoDomList = todos.map((todo) => TodoItem(todo));
  const dispatch = useAppDispatch();
  return (
    <Box margin={4}>
      <Typography variant="h3">Hello, This is React Redux Todo.</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <List>{todoDomList}</List>
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
              }}
            >
              追加
            </Button>
          </Grid>
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
