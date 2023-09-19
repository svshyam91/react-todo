import { Grid, TextField, Chip } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const AddTaskForm = () => {
    return (
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
    );
};

export default AddTaskForm;
