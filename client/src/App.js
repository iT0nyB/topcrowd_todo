import Box from "@mui/material/Box";
import Dashboard from "./components/Dashboard";
import ToDoAppBar from "./components/ToDoAppBar";

export default function App() {
  return (
    <Box>
        <ToDoAppBar/>
        <Dashboard/>
    </Box>
  );
}
