import React from 'react';

import { Container } from '@material-ui/core';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';

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
  const dataTableProps = useTable('users', {
    onRowClick,
  });

  function onRowClick(row) {
    alert(JSON.stringify(row));
  }

  return (
    <Container>
      <DataTable columns={columns} {...dataTableProps} />
    </Container>
  );
}

export default Users;
