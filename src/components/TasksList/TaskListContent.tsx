import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import TaskItem from "./TaskItem";
import { useSnackbar } from "../../context/SnackbarContext";
import { ITaskData } from "../AddTask/AddTaskForm";

const TaskListContent = () => {
    const { openSnackbar } = useSnackbar();
    const [tasks, setTasks] = useState<ITaskData[]>([]);

    useEffect(() => {
        const getTasksFromLocalStorage = (key: string) => {
            try {
                const tasks = localStorage.getItem(key);
                if (tasks) {
                    return JSON.parse(tasks);
                }
            } catch (error: any) {
                openSnackbar("Unable to get tasks from local storage", "error");
            }
        };

        const tasksFromLocalStorage = getTasksFromLocalStorage("tasks");
        setTasks(tasksFromLocalStorage);
    }, []);

    const tasksJSX = tasks.map((task) => {
        return (
            <TaskItem
                taskName={task.name}
                taskDescription={task.description}
                key={task.id}
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
