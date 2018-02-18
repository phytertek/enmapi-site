import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';
import grey from 'material-ui/colors/grey';
const theme = {
  palette: {
    primary: green,
    secondary: grey,
    error: orange,
    type: 'dark' // Switch between dark and light modes
  }
};

export default createMuiTheme(theme);
