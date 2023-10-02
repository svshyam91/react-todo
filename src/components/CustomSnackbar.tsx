import { Snackbar, Slide, SlideProps, Alert } from "@mui/material";

import { useSnackbar } from "../context/SnackbarContext";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionLeft(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
}

const CustomSnackbar = () => {
    const { open, message, severity, closeSnackbar } = useSnackbar();

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={closeSnackbar}
            TransitionComponent={TransitionLeft}
            key={TransitionLeft ? TransitionLeft.name : ""}
        >
            <Alert severity={severity}>{message}</Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
