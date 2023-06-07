import {Fab, Stack} from "@mui/material";
import TaskStatus from "./TaskStatus";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";
import {getter} from "../helpers/_client";

const Dashboard = () => {

    const [todos, setTodos] = useState([]);

    // const todos = [
    //     {id:1, title: 'First task', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    //     {id:2,title: 'Second task', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    //     {id:3,title: 'Third task', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    //     {id:4,title: 'Fourth task', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}];

    useEffect(()=>{
        getTodos();
    },[])

    const getTodos = async () => {
        try {
            const response = await getter();
            // const jsonData = await response.json();
            console.log(response);
            // setTodos(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }



    return (
        <Container>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
                spacing={2}
                m={4}
            >
                <TaskStatus tasks={todos} title={"ToDo"} />
                <Fab color="primary" aria-label="add" sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                    <AddIcon />
                </Fab>
            </Stack>
        </Container>
    );
}

export default Dashboard;
