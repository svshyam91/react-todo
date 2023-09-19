import {
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Divider,
} from "@mui/material";
import AddTaskForm from "./AddTaskForm";
import AddTaskActions from "./AddTaskActions";

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
                        <AddTaskForm />
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <AddTaskActions
                            closeAddTaskModalHandler={closeAddTaskModalHandler}
                        />
                    </DialogActions>
                </Dialog>
            </Grid>
        </Grid>
    );
};

export default AddTaskModal;
