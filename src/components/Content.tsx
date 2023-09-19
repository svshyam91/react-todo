import AddTaskModal from "./AddTask/AddTaskModal";

interface ContentProps {
    setOpenAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    openAddTaskModal: boolean;
}

const Content = (props: ContentProps) => {
    return (
        <AddTaskModal
            setOpenAddTaskModal={props.setOpenAddTaskModal}
            openAddTaskModal={props.openAddTaskModal}
        />
    );
};

export default Content;
