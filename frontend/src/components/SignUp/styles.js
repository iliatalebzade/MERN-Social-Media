import { makeStyles } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
      primary: {
          main:  "#11AFF0"
      }
    },
    // MuiStepIcon: {
    //     root: {
            
    //         color: '#151515',
    //         '&$active': {
    //             color: '#11AFF0',
    //             boxShadow: '0 0 9px #11AFF0',
    //             borderRadius: '50%',
    //         },
    //         '&$completed': {
    //             color: '#11AFF0',
    //         },
            
    //     },
    // },
    // MuiStepLabel : {
    //     root: {
    //         color: 'red',
    //         '&$active': {
    //             color: 'red',
    //         },
    //         '&$completed': {
    //             color: 'red',
    //         },
    //     },
    // },
    // MuiStepConnector: {
    //     root: {
    //         color: '#151515',
    //         '&$active': {
    //             color: '#11AFF0',
    //         },
    //         '&$completed': {
    //             color: '#11AFF0',
    //         },
    //     },
    //     active: {
    //         '& $line': {
    //             borderColor: '#11AFF0',
    //         },
    //     },
    //     completed: {
    //         '& $line': {
    //             borderColor: '#11AFF0',
    //         },
    //     },
    // },
    overrides: {
        MuiStepper: {
            root: {
                backgroundColor: "transparent",
            }
        },
        MuiStepLabel: {
            active: {
                color: "#11AFF0 !important",
                textShadow: "0 0 9px #11AFF0 !important"
            },
            completed: {
                color: "#11AFF0 !important",
            }
        },
        MuiStepIcon: {
            root: {
                color: "#151515 !important",
                '&$active': {
                    color: '#11AFF0',
                },
                '&$completed': {
                    color: '#11AFF0',
                },
                '&$disabled': {
                    fill: "#151515 !important",
                },
            },
            text: {
                fill: "#323337 !important"
            },
            active: {
                color: "#11AFF0 !important",
            },
            completed: {
                color: "#11AFF0 !important",
            }
        }
    }
});

export const useStyles = makeStyles((theme) => ({
    stepLabels: {
        fontWeight: 600,
        fontSize: "1rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".7rem"
        },
    }
}))