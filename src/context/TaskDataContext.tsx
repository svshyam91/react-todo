import { useContext, createContext, useState, ReactNode } from "react";

import { LOCAL_STORAGE_TASKS_KEY } from "../constants";

export interface ITaskData {
    id: string;
    name: string;
    description?: string;
}

interface TaskDataContextType {
    tasks: ITaskData[];
    setTasks: React.Dispatch<React.SetStateAction<ITaskData[]>>;
}

const TaskDataContext = createContext<TaskDataContextType | undefined>(
    undefined
);

export const TaskDataProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<ITaskData[]>([]);

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

    const addTask = (task: ITaskData) => {
        try {
            const newTasks = [...tasks, task];

            /* Save in local storage */
            localStorage.setItem(
                LOCAL_STORAGE_TASKS_KEY,
                JSON.stringify(newTasks)
            );

            /* Sync local state with local storage */
            syncTasksFromLocalStorage();
        } catch (error: unknown) {}
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
        } catch (error: unknown) {}
    };

    const removeTask = (taskId: string) => {
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
        } catch (error: unknown) {}
    };

    return (
        <TaskDataContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskDataContext.Provider>
    );
};

export const useTaskDataContext = () => {
    const context = useContext(TaskDataContext);
    if (context === undefined) {
        throw new Error("useTaskContext must be within the TaskDataProvider");
    }
    return context;
};
