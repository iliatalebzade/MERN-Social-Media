import { createTheme } from '@material-ui/core/styles';

export const Theme = createTheme({
    palette: {
      primary: {
          main:  "#11AFF0"
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