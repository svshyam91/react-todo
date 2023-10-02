import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import TaskItem from "./TaskItem";
import { useSnackbar } from "../../context/SnackbarContext";
import AddTaskForm, { ITaskData } from "../AddTask/AddTaskForm";
import { useTaskDataContext } from "../../context/TaskDataContext";
import { LOCAL_STORAGE_TASKS_KEY } from "../../constants";

const TaskListContent = () => {
    const { openSnackbar } = useSnackbar();
    const { tasks, setTasks } = useTaskDataContext();
    const [showEditTask, setShowEditTask] = useState({
        show: false,
        taskId: "",
    });

    useEffect(() => {
        const getTasksFromLocalStorage = (key: string) => {
            try {
                const tasks = localStorage.getItem(key);
                if (tasks) {
                    return JSON.parse(tasks) as ITaskData[];
                }
            } catch (error: any) {
                openSnackbar("Unable to get tasks from local storage", "error");
            }
        };

        const tasksFromLocalStorage = getTasksFromLocalStorage(
            LOCAL_STORAGE_TASKS_KEY
        );
        if (tasksFromLocalStorage) {
            setTasks(tasksFromLocalStorage);
        }
    }, []);

    const completeTaskHandler = (taskId: string) => {
        removeTaskFromLocalStorage(taskId);
    };

    const removeTaskFromLocalStorage = (taskId: string) => {
        try {
            /* Get tasks from local storage */
            const tasksInLocalStorage = localStorage.getItem(
                LOCAL_STORAGE_TASKS_KEY
            );
            if (tasksInLocalStorage) {
                /* Filter task that needs to be removed */
                const tasksInLocalStorageObj = JSON.parse(
                    tasksInLocalStorage
                ) as ITaskData[];
                const updatedTasks = tasksInLocalStorageObj.filter(
                    (task) => task.id !== taskId
                );

                /* Save in local storage */
                localStorage.setItem(
                    LOCAL_STORAGE_TASKS_KEY,
                    JSON.stringify(updatedTasks)
                );
            }
            /* Sync local state with local storage */
            syncTasksFromLocalStorage();

            openSnackbar("Task completed successfully", "success");
        } catch (error: unknown) {
            openSnackbar("Failed to complete task", "error");
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
        } catch (error: unknown) {}
    };

    const closeEditTaskForm = (show: boolean) => {
        setShowEditTask({ show: show, taskId: "" });
    };

    const editTaskFormHandler = (taskId: string) => {
        setShowEditTask({ show: true, taskId: taskId });
    };

    const tasksJSX = tasks.map((task) => {
        return showEditTask.show && task.id === showEditTask.taskId ? (
            <Grid
                item
                xs={12}
                className="border rounded-xl"
                padding={"10px"}
                marginTop={"5px"}
            >
                <AddTaskForm
                    openFormHandler={closeEditTaskForm}
                    taskData={task}
                />
            </Grid>
        ) : (
            <TaskItem
                key={task.id}
                taskId={task.id}
                taskName={task.name}
                taskDescription={task.description}
                completeTaskHandler={completeTaskHandler}
                editTaskFormHandler={editTaskFormHandler}
            />
        );
    });

    return (
        <Grid container className="mt-10">
            {tasksJSX}
        </Grid>
    );
};

export default TaskListContent;
