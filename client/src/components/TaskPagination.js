import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useState} from "react";

const TaskPagination = ({paginationObj, setPaginationObj}) => {

    const {currentPage, totalPageCount} = paginationObj;
    const [page, setPage] = useState(currentPage);
    const [pageCount, setPageCount] = useState(totalPageCount);
    const handleChange = (event, value) => {
        setPage(value);
        setPaginationObj({...paginationObj, currentPage: value});
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={totalPageCount} page={page} onChange={handleChange} />
        </Stack>
    );
};


export default TaskPagination;
