import { makeStyles } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
      primary: {
          main:  "#11AFF0"
      }
    },
});

export const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: 100
    }
}))