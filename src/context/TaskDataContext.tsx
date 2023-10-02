import { useContext, createContext, useState, ReactNode } from "react";

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
