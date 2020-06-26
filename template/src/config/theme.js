import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MUIDataTableSearch: {
      searchText: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    MUIDataTableHeadCell: {
      sortAction: {
        alignItems: 'center',
      },
    },
  },
  palette: {
    primary: {
      main: '#25abf2',
      dark: '#128FC6', // hover
      contrastText: '#fff',
    },
  },
});

export default theme;
