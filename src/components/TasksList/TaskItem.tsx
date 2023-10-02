import {
    Grid,
    Checkbox,
    Typography,
    IconButton,
    Button,
    Divider,
} from "@mui/material";
import { useState } from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

interface ITaskItem {
    taskId: string;
    taskName: string;
    taskDescription?: string;
    completeTaskHandler: (taskId: string) => void;
    editTaskFormHandler: (taskId: string) => void;
}

const TaskItem = (props: ITaskItem) => {
    const [showExtraIcons, setShowExtraIcons] = useState(false);

    const mouseEnterHandler = () => {
        setShowExtraIcons(true);
    };
    const mouseLeaveHandler = () => {
        setShowExtraIcons(false);
    };
    return (
        <Grid
            container
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <Grid container item justifyContent={"flex-end"}>
                <Grid container item alignItems={"center"} xs>
                    <Grid item>
                        <Checkbox
                            checked
                            icon={<CircleOutlinedIcon />}
                            checkedIcon={<CheckCircleOutlinedIcon />}
                            size="small"
                            onClick={() =>
                                props.completeTaskHandler(props.taskId)
                            }
                        />
                    </Grid>
                    <Grid item overflow={"hidden"}>
                        <Typography variant="body1" noWrap={true}>
                            {props.taskName}
                        </Typography>
                    </Grid>
                </Grid>
                {showExtraIcons && (
                    <Grid
                        container
                        item
                        xs
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <IconButton
                                color="secondary"
                                onClick={() =>
                                    props.editTaskFormHandler(props.taskId)
                                }
                                size="small"
                                className="font-light"
                            >
                                <BorderColorOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                color="secondary"
                                onClick={() => {}}
                                size="small"
                                className="font-light"
                            >
                                <InsertInvitationOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                color="secondary"
                                onClick={() => {}}
                                size="small"
                                className="font-light"
                            >
                                <ModeCommentOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                color="secondary"
                                onClick={() => {}}
                                size="small"
                                className="font-light"
                            >
                                <MoreHorizOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                    </Grid>
                )}
            </Grid>
            <Grid container item>
                <Grid item paddingLeft={"38px"} overflow={"hidden"}>
                    <Typography variant="body2" noWrap={true}>
                        {props.taskDescription}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item justifyContent={"flex-end"}>
                <Grid item>
                    <Button
                        variant="text"
                        size="small"
                        endIcon={<ArchiveOutlinedIcon fontSize="inherit" />}
                        color="secondary"
                    >
                        Inbox
                    </Button>
                </Grid>
            </Grid>
            <Grid container item>
                <Divider className="w-full" />
            </Grid>
        </Grid>
    );
};

export default TaskItem;
