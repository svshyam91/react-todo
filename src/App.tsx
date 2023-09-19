import { Grid } from "@mui/material";
import Header from "./components/Header";

function App() {
    return (
        <Grid container>
            <Grid container>
                <Header />
            </Grid>
            <Grid container>Content</Grid>
            <Grid container>Footer</Grid>
        </Grid>
    );
}

export default App;
