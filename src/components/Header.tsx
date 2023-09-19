import Grid from "@mui/material/Grid";
import { Typography, Button, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";

interface HeaderProps {
    setOpenAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: HeaderProps) => {
    const addTaskHandler = () => {
        props.setOpenAddTaskModal(true);
    };

    return (
        <Grid container className="bg-slate-200">
            <Grid container item xs justifyContent={"flex-start"}>
                <Grid item xs={6} className="flex justify-start items-center">
                    <Button variant="text" color="secondary">
                        <DoneIcon color="secondary" />
                        <Typography variant="h6">Todo</Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs justifyContent={"flex-end"}>
                <Grid item className="flex justify-start items-center">
                    <IconButton color="secondary" onClick={addTaskHandler}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                {/* <Grid item className="flex justify-start items-center">
                    <Button
                        variant="text"
                        color="secondary"
                        className="text-xs"
                    >
                        <Typography>Sign Up</Typography>
                    </Button>
                </Grid>
                <Grid item className="flex justify-start items-center">
                    <Button
                        variant="text"
                        color="secondary"
                        className="text-xs"
                    >
                        <Typography>Login</Typography>
                    </Button>
                </Grid> */}
            </Grid>
        </Grid>
    );
};

export default Header;
