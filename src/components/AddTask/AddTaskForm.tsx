import { useState } from "react";
import { Grid, TextField, Chip, Button, Divider } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { useSnackbar } from "../../context/SnackbarContext";
import { LOCAL_STORAGE_TASKS_KEY } from "../../constants";
import { useTaskDataContext } from "../../context/TaskDataContext";

interface IAddTaskFormProps {
    openFormHandler: (openForm: boolean) => void;
    taskData?: ITaskData;
}

export interface ITaskData {
    id: string;
    name: string;
    description?: string;
}

const AddTaskForm = (props: IAddTaskFormProps) => {
    const [taskName, setTaskName] = useState(props.taskData?.name || "");
    const [taskDescription, setTaskDescription] = useState(
        props.taskData?.description || ""
    );
    const { openSnackbar } = useSnackbar();
    const { setTasks } = useTaskDataContext();

    const addTaskHandler = () => {
        if (!taskName) {
            console.error(
                "Unable to save task as task name is empty/undefined"
            );
            return;
        }
        saveTaskToLocalStorage(LOCAL_STORAGE_TASKS_KEY, {
            id: crypto.randomUUID().toString(),
            name: taskName,
            description: taskDescription,
        });
        props.openFormHandler(false);
    };

    const editTaskHandler = () => {
        if (props.taskData) {
            if (!taskName) {
                /* TODO: Create separate function for validation and check length of task name and description */
                console.error(
                    "Unable to save task as task name is empty/undefined"
                );
                return;
            }
            updateTask({
                id: props.taskData.id,
                name: taskName,
                description: taskDescription,
            });
        }
    };

    const updateTask = (task: ITaskData) => {
        try {
            /* Get tasks from local storage */
            const tasksInLocalStorage = localStorage.getItem(
                LOCAL_STORAGE_TASKS_KEY
            );
            if (tasksInLocalStorage) {
                const tasksInLocalStorageObj = JSON.parse(
                    tasksInLocalStorage
                ) as ITaskData[];
                const filteredTasks = tasksInLocalStorageObj.filter(
                    (t) => t.id !== task.id
                );
                /* Add updated task in filtered tasks */
                const updatedTasks = [...filteredTasks, task];

                /* Save in local storage */
                localStorage.setItem(
                    LOCAL_STORAGE_TASKS_KEY,
                    JSON.stringify(updatedTasks)
                );
            }
            /* Sync local state with local storage */
            syncTasksFromLocalStorage();

            openSnackbar("Task Updated Successfully", "success");
            props.openFormHandler(false);
        } catch (error: unknown) {}
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

            /* Sync local state with local storage */
            syncTasksFromLocalStorage();

            openSnackbar("Task Saved Successfully", "success");
        } catch (error: any) {
            openSnackbar("Failed to save task", "error");
        }
    };

    const syncTasksFromLocalStorage = () => {
        try {
            const tasks = localStorage.getItem(LOCAL_STORAGE_TASKS_KEY);
            if (tasks) {
                setTasks(JSON.parse(tasks));
            } else {
                setTasks([]);
            }
        } catch (error: unknown) {
            throw new Error("Unable to sync local state with local storage");
        }
    };

    return (
        <Grid container>
            <Grid container direction={"column"} spacing={2} mb={2}>
                <Grid container item>
                    <Grid item xs>
                        <TextField
                            value={taskName}
                            onChange={(event) =>
                                setTaskName(event.target.value)
                            }
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
                            value={taskDescription}
                            onChange={(event) =>
                                setTaskDescription(event.target.value)
                            }
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
                        onClick={() => props.openFormHandler(false)}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={
                            props.taskData ? editTaskHandler : addTaskHandler
                        }
                    >
                        {props.taskData ? "Save" : "Add Task"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AddTaskForm;
