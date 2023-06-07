import Typography from "@mui/material/Typography";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Menu,
    MenuItem,
    styled, TextField
} from "@mui/material";
import {useState} from "react";
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const label = { inputProps: { 'aria-label': 'Mark/Unmark Activity as Completed' } };

const Task = ({task}) => {
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [editTaskOpen, setEditTaskOpen] = useState(false);
    const [deleteTaskOpen, setDeleteTaskOpen] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClickOpen = () => {
        setEditTaskOpen(true);
    };

    const handleClickClose = () => {
        setEditTaskOpen(false);
    };

    const handleChange = () => {
    }

    const handleDeleteOpen = () => {
        setDeleteTaskOpen(true);
    }

    const handleDeleteClose = () => {
        setDeleteTaskOpen(false);
    }

    return (
        <Card sx={{ width: 345, maxWidth: 345 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={task.title}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleChange}>Mark as Completed</MenuItem>
                <MenuItem onClick={handleClickOpen}>Edit Task</MenuItem>
                <MenuItem onClick={handleDeleteOpen}>Delete Task</MenuItem>
            </Menu>
            <Dialog open={editTaskOpen} onClose={handleClose}>
                <DialogTitle>Edit Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit Task Name/Description
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={handleClose}>Update</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={deleteTaskOpen} onClose={handleClose}>
                <DialogTitle>Delete Task?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this task. This action is IRREVERSIBLE!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose}>Cancel</Button>
                    <Button onClick={handleDeleteClose} variant="contained" color="error" >DELETE</Button>
                </DialogActions>
            </Dialog>
            <CardActions disableSpacing>
                <Checkbox {...label} checked={task.completed} onChange={handleChange} icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon color="success"/>} />
                <IconButton aria-label="edit" onClick={handleClickOpen}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={handleDeleteOpen}>
                    <DeleteIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>{task.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>

    )
}

export default Task;
