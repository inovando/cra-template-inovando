import React from 'react';
import MUIDataTable from 'mui-datatables';

function DataTable({ loading = false, options = {}, ...rest }) {
  const computedOptions = {
    serverSide: true,
    responsive: 'simple',
    filter: false,
    selectableRows: 'none',
    textLabels: {
      body: {
        noMatch: loading ? 'Carregando...' : 'Nenhum registro encontrado.',
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

  return (
    <MUIDataTable title={'Listagem'} options={computedOptions} {...rest} />
  );
}

export default DataTable;
