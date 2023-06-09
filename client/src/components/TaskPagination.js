import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useState} from "react";
import {getToDos, todoSelector} from "../store/slices/todoSlice";
import {useDispatch, useSelector} from "react-redux";

const TaskPagination = () => {

    const dispatch = useDispatch();
    const { paginationObj } = useSelector(todoSelector);

    const {currentPage, totalPages} = paginationObj;
    const [page, setPage] = useState(currentPage);

    const handleChange = (event, value) => {
        setPage(value);
        dispatch(getToDos(value));
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
    );
};


export default TaskPagination;
