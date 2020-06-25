import React from 'react';
import MUIDataTable from 'mui-datatables';
import { CircularProgress, Paper, Box } from '@material-ui/core';
import Centered from 'components/Centered';

function DataTable({ loading = false, options = {}, ...rest }) {
  const computedOptions = {
    serverSide: true,
    responsive: 'simple',
    filter: false,
    sort: false,
    search: false,
    selectableRows: 'none',
    textLabels: {
      body: {
        noMatch: 'Nenhum registro encontrado.',
      },
      pagination: {
        next: 'Próxima página',
        previous: 'Página anterior',
        rowsPerPage: 'Registros por página:',
        displayRows: 'de',
      },
      toolbar: {
        search: 'Pesquisa',
        downloadCsv: 'Baixar CSV',
        print: 'Imprimir',
        viewColumns: 'Ver colunas',
        filterTable: 'Filtrar tabela',
      },
      filter: {
        all: 'Todos',
        title: 'Filtros',
        reset: 'Reiniciar',
      },
      viewColumns: {
        title: 'Mostrar colunas',
        titleAria: 'Mostrar/Ocular colunas da tabela',
      },
      selectedRows: {
        text: 'Registro(s) selecionado(s)',
        delete: 'Deletar',
        deleteAria: 'Deletar registros selecionadoss',
      },
    },
    ...options,
    onRowClick(_rowData, rowMeta) {
      if (!options.onRowClick) return;
      options.onRowClick(rest.data[rowMeta.rowIndex]);
    },
  };

  if (loading) {
    return (
      <Box width={1}>
        <Paper>
          <Centered>
            <Box m={3}>
              <CircularProgress size={50} m={5} color="primary" />
            </Box>
          </Centered>
        </Paper>
      </Box>
    );
  }

  return (
    <MUIDataTable title={'Listagem'} options={computedOptions} {...rest} />
  );
}

export default DataTable;
