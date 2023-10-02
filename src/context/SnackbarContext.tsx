import { ReactNode, createContext, useContext, useState } from "react";

type SnackbarSeverityType = "error" | "warning" | "success" | "info";

interface SnackbarStateType {
    open: boolean;
    message: string;
    severity: SnackbarSeverityType;
}

interface SnackbarContextType extends SnackbarStateType {
    openSnackbar: (message: string, severity: SnackbarSeverityType) => void;
    closeSnackbar: () => void;
}

const initialSnackbarState: SnackbarStateType = {
    open: false,
    message: "",
    severity: "info",
};

const SnackbarContext = createContext<SnackbarContextType>({
    ...initialSnackbarState,
    closeSnackbar: () => {},
    openSnackbar: () => {},
});

export function SnackbarProvider({ children }: { children: ReactNode }) {
    const [snackbarState, setSnackbarState] =
        useState<SnackbarStateType>(initialSnackbarState);

    const openSnackbar = (message: string, severity: SnackbarSeverityType) => {
        setSnackbarState({
            open: true,
            message: message,
            severity: severity,
        });
    };

    const closeSnackbar = () => {
        setSnackbarState({
            open: false,
            message: "",
            severity: "info",
        });
    };

    const value: SnackbarContextType = {
        ...snackbarState,
        openSnackbar,
        closeSnackbar,
    };

    return (
        <SnackbarContext.Provider value={value}>
            {children}
        </SnackbarContext.Provider>
    );
}

export function useSnackbar() {
    return useContext(SnackbarContext);
}
