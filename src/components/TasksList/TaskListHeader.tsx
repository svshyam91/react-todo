import { Grid, Typography, Button } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const TaskListHeader = () => {
    return (
        <Grid container justifyContent={"flex-start"}>
            <Grid container item xs spacing={1} alignItems={"center"}>
                <Grid item>
                    <Typography variant="h6">Today</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption">Tue 19 Sep</Typography>
                </Grid>
            </Grid>
            <Grid item xs className="flex justify-end">
                <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<TuneOutlinedIcon />}
                    size="small"
                >
                    View
                </Button>
            </Grid>
        </Grid>
    );
};

export default TaskListHeader;
