import { TaskDataProvider } from "../context/TaskDataContext";
import AddTaskModal from "./AddTask/AddTaskModal";
import TaskListContainer from "./TasksList/TaskListContainer";

interface ContentProps {
    setOpenAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    openAddTaskModal: boolean;
}

const Content = (props: ContentProps) => {
    return (
        <TaskDataProvider>
            <AddTaskModal
                setOpenAddTaskModal={props.setOpenAddTaskModal}
                openAddTaskModal={props.openAddTaskModal}
            />
            <TaskListContainer />
        </TaskDataProvider>
    );
};

export default Content;
