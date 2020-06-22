import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#25abf2',
      dark: '#128FC6', // hover
      contrastText: '#fff',
    },
  },
});

export default theme;
