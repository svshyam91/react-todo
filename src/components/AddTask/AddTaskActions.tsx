import { Grid, Button } from "@mui/material";

interface AddTaskActionsProps {
    closeAddTaskModalHandler: () => void;
}

const AddTaskActions = (props: AddTaskActionsProps) => {
    return (
        <Grid container justifyContent={"flex-end"} spacing={1}>
            <Grid item>
                <Button
                    variant="contained"
                    size="small"
                    className="mx-3"
                    color="secondary"
                    onClick={props.closeAddTaskModalHandler}
                >
                    Cancel
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="small" color="secondary">
                    Add Task
                </Button>
            </Grid>
        </Grid>
    );
};

export default AddTaskActions;
