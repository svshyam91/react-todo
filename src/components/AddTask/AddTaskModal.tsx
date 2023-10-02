import { Dialog, DialogContent, Grid, Divider } from "@mui/material";
import AddTaskForm from "./AddTaskForm";

interface AddTaskModalProps {
    setOpenAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    openAddTaskModal: boolean;
}

const AddTaskModal = (props: AddTaskModalProps) => {
    const closeAddTaskModalHandler = () => {
        props.setOpenAddTaskModal(false);
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <Dialog
                    open={props.openAddTaskModal}
                    PaperProps={{ className: "w-1/2" }}
                    onClose={closeAddTaskModalHandler}
                >
                    <DialogContent>
                        <AddTaskForm
                            closeAddTaskModalHandler={closeAddTaskModalHandler}
                        />
                    </DialogContent>
                    <Divider />
                </Dialog>
            </Grid>
        </Grid>
    );
};

export default AddTaskModal;
