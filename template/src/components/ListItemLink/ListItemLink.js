import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
  const { icon, title, path, selected } = props;

  const renderLink = React.useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <RouterLink to={path} ref={ref} {...itemProps} />
      )),
    [path],
  );

  return (
    <li>
      <ListItem button selected={selected} component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={title} />
      </ListItem>
    </li>
  );
}

export default ListItemLink;
