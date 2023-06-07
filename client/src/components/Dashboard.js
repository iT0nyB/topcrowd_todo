import Stack from "@mui/material/Stack";
import TaskStatus from "./TaskStatus";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import {getter} from "../helpers/_client";
import TaskPagination from "./TaskPagination";

const Dashboard = () => {

    const [todos, setTodos] = useState([]);
    const [paginationObj, setPaginationObj] = useState({currentPage: 1, totalPageCount:1, pageSize:5, totalTaskCount:0});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getTodos();
    },[paginationObj.currentPage])

    const getTodos = async () => {
        try {
            const todos = await getter(`?page=${paginationObj.currentPage}&pageSize=${paginationObj.pageSize}`);
            setTodos(todos.data);
            setPaginationObj({...paginationObj, totalPageCount: todos.totalPages, totalTaskCount:todos.total })
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <Container>
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="baseline"
                spacing={2}
                m={4}
            >
                <TaskStatus tasks={todos} title={"ToDo"} pageSize={paginationObj.pageSize} loading={loading} />

                <TaskPagination paginationObj={paginationObj}
                                setPaginationObj={setPaginationObj}/>
            </Stack>
        </Container>
    );
}

export default Dashboard;
