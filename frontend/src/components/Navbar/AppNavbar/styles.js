import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    avatar: {
        background: "#11AFF0",
        width: "2.5rem",
        height: "2.5rem",
        [theme.breakpoints.down('xs')]: {
            width: "1.6rem",
            height: "1.6rem"
        },
    },
}))