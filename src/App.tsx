import { Grid } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";

import { useState } from "react";

function App() {
    const [openAddTaskModal, setOpenAddTaskModal] = useState(false);

    return (
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
        </Grid>
    );
}

export default App;
