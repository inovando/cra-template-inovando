import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';
import UserDialog from 'dialogs/UserDialog';
import api from 'services/api';

const columns = [
  {
    name: 'name',
    label: 'Nome',
  },
  {
    name: 'lastname',
    label: 'Sobrenome',
  },
];

function Users() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const { onRefresh, ...dataTableProps } = useTable('users', {
    onRowClick,
  });

  function onRowClick(row) {
    setOpen(true);
    setUser(row);
  }

  const onSubmit = async values => {
    if (typeof values?.id === 'number') {
      const { id, ...form } = values;
      await api.put(`users/${id}`, form);
    } else {
      await api.post('users', values);
    }
    onRefresh();
    setUser({});
    setOpen(false);
  };

  return (
    <Container>
      <DataTable columns={columns} {...dataTableProps} />
      <UserDialog
        open={open}
        onClose={() => {
          setUser({});
          setOpen(false);
        }}
        onAdd={() => {
          setOpen(true);
        }}
        initialValues={user}
        onSubmit={onSubmit}
      />
    </Container>
  );
}

export default Users;
