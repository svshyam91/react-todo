import { Grid } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";

import { useState } from "react";
import { SnackbarProvider } from "./context/SnackbarContext";
import CustomSnackbar from "./components/CustomSnackbar";

function App() {
    const [openAddTaskModal, setOpenAddTaskModal] = useState(false);

    return (
        <SnackbarProvider>
            <Grid container>
                <Grid container>
                    <Header setOpenAddTaskModal={setOpenAddTaskModal} />
                </Grid>
                <Grid container>
                    <Content
                        setOpenAddTaskModal={setOpenAddTaskModal}
                        openAddTaskModal={openAddTaskModal}
                    />
                </Grid>
                <Grid container>Footer</Grid>
                <CustomSnackbar />
            </Grid>
        </SnackbarProvider>
    );
}

export default App;
