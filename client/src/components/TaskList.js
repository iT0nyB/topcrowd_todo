import Task from "./Task";
import {Stack} from "@mui/material";

const TaskList = ({tasks}) => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}>
            {tasks.map(task =>
                <Task key={task.id} task={task}/>
            )}
        </Stack>

    );
};

export default TaskList;
