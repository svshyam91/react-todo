import AddTaskModal from "./AddTask/AddTaskModal";
import TaskListContainer from "./TasksList/TaskListContainer";

interface ContentProps {
    setOpenAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    openAddTaskModal: boolean;
}

const Content = (props: ContentProps) => {
    return (
        <>
            <AddTaskModal
                setOpenAddTaskModal={props.setOpenAddTaskModal}
                openAddTaskModal={props.openAddTaskModal}
            />
            <TaskListContainer />
        </>
    );
};

export default Content;
