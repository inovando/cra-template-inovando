import React from 'react';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// Pages
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import ForgotPassword from 'pages/ForgotPassword';
import Profile from 'pages/Profile';
import Users from 'pages/Users';

const config = {
  public: [
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/esqueci-minha-senha',
      component: ForgotPassword,
      exact: true,
    },
  ],
  protected: [
    {
      path: '/',
      component: Dashboard,
      title: 'Dashboard',
      exact: true,
      icon: <DashboardIcon />,
    },
    {
      path: '/users',
      component: Users,
      title: 'Usuários',
      exact: true,
      icon: <PeopleIcon />,
    },
    {
      path: '/profile',
      component: Profile,
      title: 'Perfil',
      exact: true,
      icon: <AccountBoxIcon />,
    },
  ],
};

export default config;
