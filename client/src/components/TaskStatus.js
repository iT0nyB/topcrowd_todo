import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TaskList from "./TaskList";
import {Button} from "@mui/material";
import SkeletonTasks from "./SkeletonTasks";
import AddIcon from "@mui/icons-material/Add";

const TaskStatus = ({title, tasks, pageSize, loading}) => {

    return (
        <Box>
            <Typography variant={"h4"} pb={3}>{title} <Button variant="contained" size="small" startIcon={<AddIcon />}>Add Task</Button></Typography>
            {loading ?
                (<SkeletonTasks num={pageSize}/>)
                :
                (<TaskList tasks={tasks}/>)
            }

        </Box>
    );
}

export default TaskStatus;
