import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TaskList from "./TaskList";
import * as React from "react";

const TaskStatus = ({title, tasks}) => {
    return (
        <Box>
            <Typography variant={"h4"} pb={3}>{title}</Typography>
            <TaskList tasks={tasks}/>
        </Box>
    );
}

export default TaskStatus;
