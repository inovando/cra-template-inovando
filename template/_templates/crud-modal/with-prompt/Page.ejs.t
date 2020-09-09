---
to: src/pages/<%= h.changeCase.pascal(name) %>.js
force: true
---
import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';
import <%= h.changeCase.pascal(name) %>Dialog from 'dialogs/<%= h.changeCase.pascal(name) %>Dialog';

const columns = [
  {
    name: 'nome',
    label: 'Nome',
  },
];

function <%= h.changeCase.pascal(name) %>() {
  const [open, setOpen] = useState(false);
  const [<%= h.changeCase.camel(name) %>, set<%= h.changeCase.pascal(name) %>] = useState({});
  const dataTableProps = useTable('<%= name %>', {
    onRowClick,
  });

  function onRowClick(row) {
    console.log('row:', row);
  }

  const onSubmit = values => {
    console.log('values:', values);
  };

  return (
    <Container>
      <DataTable columns={columns} {...dataTableProps} />
      <<%= h.changeCase.pascal(name) %>Dialog
        open={open}
        onClose={() => {
          set<%= h.changeCase.pascal(name) %>({});
          setOpen(false);
        }}
        onAdd={() => {
          setOpen(true);
        }}
        initialValues={<%= h.changeCase.camel(name) %>}
        onSubmit={onSubmit}
      />
    </Container>
  );
}

export default <%= h.changeCase.pascal(name) %>;
