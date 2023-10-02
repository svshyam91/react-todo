import { Grid, IconButton } from "@mui/material";

import TaskListHeader from "./TaskListHeader";
import TaskListContent from "./TaskListContent";
import TaskListFooter from "./TaskListFooter";

const TaskListContainer = () => {
    return (
        <Grid container justifyContent={"center"}>
            <Grid container item xs={12} lg={6} padding={"20px"}>
                <TaskListHeader />
                <TaskListContent />
                <TaskListFooter />
            </Grid>
        </Grid>
    );
};

export default TaskListContainer;
