import {Box} from "@mui/material";
import Dashboard from "./components/Dashboard";
import Container from "@mui/material/Container";
import ToDoAppBar from "./components/ToDoAppBar";

export default function App() {
  return (
    <Box>
        <ToDoAppBar/>
        <Dashboard/>
    </Box>
  );
}
