import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import Inovando from 'images/inovando-horizontal.svg';
import ListItemLink from 'components/ListItemLink';
import { useAuth } from 'contexts/auth';
import { useLocation, matchPath, Redirect, useHistory } from 'react-router-dom';
import config from 'routes/config';
import { Avatar, Box, ListItemAvatar } from '@material-ui/core';
import useStyles from './useStyles';

function LoggedLayout(props) {
  const { user, signOut } = useAuth();
  const { window, children, routes } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let location = useLocation();

  const activeRoute = Object.keys(config)
    .map(key => config[key])
    .flat()
    .find(route => matchPath(location.pathname, route));

  useEffect(() => {
    history.listen(() => {
      setMobileOpen(false);
    });
  }, [history]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!activeRoute) {
    return <Redirect to="/" />;
  }

  const drawer = (
    <Box className={classes.menu}>
      <div className={classes.toolbar}>
        <img
          draggable={false}
          style={{ height: 35 }}
          src={Inovando}
          alt="Inovando's Logo"
        />
      </div>
      <Divider />
      <List>
        {routes.protected
          .filter(route => !route.hideFromMenu)
          .map(props => (
            <ListItemLink
              selected={activeRoute.path === props.path}
              key={props.path}
              {...props}
            />
          ))}
      </List>
      <Box mt="auto">
        <Divider />
        <ListItem className={classes.loggedUser}>
          <ListItemAvatar>
            <Avatar alt="Usuário logado" src={user?.photoUrl} />
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={user?.name || 'Sem nome'}
            secondary={
              <button
                className={classes.logoutButton}
                component="button"
                onClick={signOut}
              >
                Sair
              </button>
            }
          />
        </ListItem>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {activeRoute.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
}

export default LoggedLayout;
