import React from 'react';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';

// Pages
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

const config = {
  public: [
    {
      path: '/login',
      component: Login,
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
      component: () => <div>Usuários</div>,
      title: 'Usuários',
      exact: true,
      icon: <PeopleIcon />,
    },
  ],
};

export default config;
