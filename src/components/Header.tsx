import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const Header = () => {
    return (
        <Grid container className="bg-slate-200">
            <Grid container item xs justifyContent={"flex-start"}>
                <Grid item xs={2} className="flex justify-start items-center">
                    <Button variant="text" color="secondary">
                        <DoneIcon color="secondary" />
                        <Typography variant="h6">Todo</Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs justifyContent={"flex-end"}>
                <Grid item>
                    <Button
                        variant="text"
                        color="secondary"
                        className="text-xs"
                    >
                        <Typography variant="h6">Sign Up</Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="text"
                        color="secondary"
                        className="text-xs"
                    >
                        <Typography variant="h6">Login</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;
