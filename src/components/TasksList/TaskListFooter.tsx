import { useState } from "react";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddTaskForm from "../AddTask/AddTaskForm";

const TaskListFooter = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    const openFormHandler = (openForm: boolean) => {
        setShowAddForm(openForm);
    };
    return !showAddForm ? (
        <Grid item xs={12}>
            <Button
                variant="text"
                startIcon={<AddIcon />}
                fullWidth
                style={{ display: "flex", justifyContent: "start" }}
                onClick={() => setShowAddForm(true)}
            >
                Add Task
            </Button>
            {/* <IconButton color="secondary" onClick={() => {}}>
                <AddIcon />
            </IconButton> */}
        </Grid>
    ) : (
        <Grid
            item
            xs={12}
            className="border rounded-xl"
            padding={"10px"}
            marginTop={"5px"}
        >
            <AddTaskForm openFormHandler={openFormHandler} />
        </Grid>
    );
};

export default TaskListFooter;
