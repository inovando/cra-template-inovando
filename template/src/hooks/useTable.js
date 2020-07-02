import { useCallback, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import api from 'services/api';

function useTable(endpoint, options) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');

  const loadData = useCallback(async () => {
    const showLoading = setTimeout(() => {
      setData([]);
      setLoading(true);
    }, 1000);

    const common = { _limit: rowsPerPage, _page: page, q: search };
    const params = sort ? { ...common, _sort: sort, _order: order } : common;

    try {
      const response = await api.get(endpoint, { params });
      setData(response.data);
      setCount(parseInt(response.headers['x-total-count'], 10));
    } finally {
      // only shows loading if response from server
      // takes more than 1 second
      clearTimeout(showLoading);
      setLoading(false);
    }
  }, [page, rowsPerPage, endpoint, sort, order, search]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  function onChangePage(pageIndex) {
    const nextPage = pageIndex + 1;
    setPage(nextPage);
  }

  function onChangeRowsPerPage(rows) {
    setRowsPerPage(rows);
    setPage(1);
  }

  function onColumnSortChange(changedColumn, direction) {
    setSort(changedColumn);
    setOrder(direction);
  }

  function onRefresh() {
    loadData();
  }

  const onSearchDebounced = debounce(setSearch, 250);

  return {
    options: {
      count,
      page: page - 1,
      rowsPerPage,
      onChangePage,
      onChangeRowsPerPage,
      onColumnSortChange,
      onSearchChange: onSearchDebounced,
      ...options,
    },
    data,
    loading,
    onRefresh,
  };
}

export default useTable;
