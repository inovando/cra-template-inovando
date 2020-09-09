---
to: src/pages/<%= h.changeCase.pascal(name) %>.js
force: true
---
import React from 'react';

import Container from '@material-ui/core/Container';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';
import AddButton from 'components/AddButton';
import { useHistory } from 'react-router-dom';

const columns = [
  {
    name: 'nome',
    label: 'Nome',
  },
];

function <%= h.changeCase.pascal(name) %>() {
  const history = useHistory();
  const dataTableProps = useTable('<%= name %>', {
    onRowClick,
  });

  function onRowClick(row) {
    history.push(`/<%= h.inflection.dasherize(name) %>/${row.id}`);
  }

  return (
    <Container>
      <DataTable columns={columns} {...dataTableProps} />
      <AddButton onClick={() => history.push('/<%= h.inflection.dasherize(name) %>/new')} />
    </Container>
  );
}

export default <%= h.changeCase.pascal(name) %>;
