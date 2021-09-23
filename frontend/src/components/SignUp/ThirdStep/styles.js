import { makeStyles } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
      primary: {
          main:  "#11AFF0"
      },
      secondary: {
          main: "#151515"
      }
    },
    overrides: {
        MuiStepIcon: {
            root: {
                color: '#151515',
                '&$active': {
                    color: '#11AFF0',
                    boxShadow: '0 0 9px #11AFF0',
                    borderRadius: '50%',
                },
                '&$completed': {
                    color: '#11AFF0',
                },
            },
        },
        MuiStepLabel : {
            root: {
                color: 'red',
                '&$active': {
                    color: 'red',
                },
                '&$completed': {
                    color: 'red',
                },
            },
        },
        MuiStepConnector: {
            root: {
                color: '#151515',
                '&$active': {
                    color: '#11AFF0',
                },
                '&$completed': {
                    color: '#11AFF0',
                },
            },
            active: {
                '& $line': {
                  borderColor: '#11AFF0',
                },
            },
            completed: {
                '& $line': {
                    borderColor: '#11AFF0',
                },
            },
        },
    }
});

export const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
        height: theme.spacing(10),
        width: theme.spacing(10),
        boxShadow: "0 0 12px #111"
    },
    usenameSize: {
        fontSize: theme.spacing(3),
        marginLeft: theme.spacing(2),
    },
    looksGood: {
        fontSize: theme.spacing(3)
    }
}))