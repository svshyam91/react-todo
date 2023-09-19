import {
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    Grid,
    Button,
    Divider,
    Chip,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
                        <Grid container direction={"column"} spacing={2}>
                            <Grid container item>
                                <Grid item xs>
                                    <TextField
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
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <Grid container justifyContent={"flex-end"} spacing={1}>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    className="mx-3"
                                    color="secondary"
                                    onClick={closeAddTaskModalHandler}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="secondary"
                                >
                                    Add Task
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Grid>
    );
};

export default AddTaskModal;
