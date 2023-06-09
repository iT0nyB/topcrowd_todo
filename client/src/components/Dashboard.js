import Stack from "@mui/material/Stack";
import TaskStatus from "./TaskStatus";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import TaskPagination from "./TaskPagination";
import {useDispatch, useSelector} from "react-redux";
import {getToDos, todoSelector} from "../store/slices/todoSlice";

const Dashboard = () => {

    const dispatch = useDispatch();
    const { loading, hasErrors, todos, paginationObj } = useSelector(todoSelector);

    useEffect(() => {
        dispatch(getToDos(paginationObj.currentPage));
    }, [paginationObj.currentPage]);

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

                <TaskPagination />
            </Stack>
        </Container>
    );
}

export default Dashboard;
