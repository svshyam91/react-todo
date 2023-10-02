import { Grid, TextField, Chip, Button, Divider } from "@mui/material";
import { useRef } from "react";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSnackbar } from "../../context/SnackbarContext";

interface IAddTaskFormProps {
    closeAddTaskModalHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITaskData {
    id: `${string}-${string}-${string}-${string}-${string}`;
    name: string;
    description?: string;
}

const AddTaskForm = (props: IAddTaskFormProps) => {
    const taskNameInputRef = useRef<HTMLInputElement | null>(null);
    const taskDescriptionInputRef = useRef<HTMLInputElement | null>(null);
    const { openSnackbar } = useSnackbar();

    const addTaskHandler = () => {
        const taskName = taskNameInputRef.current?.value;
        const taskDescription = taskDescriptionInputRef.current?.value;
        if (!taskName) {
            console.error(
                "Unable to save task as task name is empty/undefined"
            );
            return;
        }
        saveTaskToLocalStorage("tasks", {
            id: crypto.randomUUID(),
            name: taskName,
            description: taskDescription,
        });
        openSnackbar("Task Saved Successfully", "success");
    };

    const saveTaskToLocalStorage = (key: string, newTask: ITaskData) => {
        try {
            /* Retrieve existing data from local storage */
            const existingTasksJSON = localStorage.getItem(key);

            const existingTasks = existingTasksJSON
                ? JSON.parse(existingTasksJSON)
                : [];
            existingTasks.push(newTask);

            /* Save tasks to local storage */
            localStorage.setItem(key, JSON.stringify(existingTasks));
        } catch (error: any) {}
    };

    return (
        <Grid container>
            <Grid container direction={"column"} spacing={2} mb={2}>
                <Grid container item>
                    <Grid item xs>
                        <TextField
                            inputRef={taskNameInputRef}
                            variant="standard"
                            fullWidth
                            hiddenLabel
                            placeholder="Task Name"
                            color="secondary"
                        />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs>
                        <TextField
                            inputRef={taskDescriptionInputRef}
                            variant="standard"
                            fullWidth
                            hiddenLabel
                            placeholder="Description"
                            color="secondary"
                            multiline
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={1}>
                    <Grid item>
                        <Chip
                            label="Due Date"
                            avatar={
                                <CalendarMonthOutlinedIcon
                                    style={{ color: "#9c27b0" }}
                                />
                            }
                            onClick={() => {}}
                        />
                    </Grid>
                    <Grid item>
                        <Chip
                            label="Priority"
                            avatar={
                                <FlagOutlinedIcon
                                    fontSize="small"
                                    style={{ color: "#9c27b0" }}
                                />
                            }
                            onClick={() => {}}
                        />
                    </Grid>
                    <Grid item>
                        <Chip
                            label="Location"
                            avatar={
                                <LocationOnOutlinedIcon
                                    fontSize="small"
                                    style={{ color: "#9c27b0" }}
                                />
                            }
                            onClick={() => {}}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Divider className="w-full" />
            </Grid>
            <Grid container justifyContent={"flex-end"} spacing={1} mt={2}>
                <Grid item>
                    <Button
                        variant="contained"
                        size="small"
                        className="mx-3"
                        color="secondary"
                        onClick={() => props.closeAddTaskModalHandler(false)}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={addTaskHandler}
                    >
                        Add Task
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AddTaskForm;
