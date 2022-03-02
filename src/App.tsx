import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import "./App.css";
import { TodoPage } from "./features/todo/Todo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F8A602",
    },
    secondary: {
      main: "#E85A64",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoPage />;
    </ThemeProvider>
  );
}

export default App;
