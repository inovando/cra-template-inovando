import React from 'react';

import { Container } from '@material-ui/core';
import DataTable from 'components/DataTable';
import usePagination from 'hooks/usePagination';

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
  const dataTableProps = usePagination('users', {
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
