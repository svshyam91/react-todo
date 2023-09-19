import { Grid } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskListContent = () => {
    return (
        <Grid container className="mt-10">
            <TaskItem />
        </Grid>
    );
};

export default TaskListContent;
