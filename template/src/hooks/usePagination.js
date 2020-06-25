import { useCallback, useState, useEffect } from 'react';
import api from 'services/api';

function usePagination(endpoint, options) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    let showLoading = null;

    if (page > 1) {
      showLoading = setTimeout(() => {
        setLoading(true);
      }, 1000);
    } else {
      setLoading(true);
    }

    const response = await api.get(endpoint, {
      params: {
        _limit: rowsPerPage,
        _page: page,
      },
    });

    // only shows loading if response from server
    // takes more than 1 second
    clearTimeout(showLoading);

    setData(response.data);
    setCount(parseInt(response.headers['x-total-count'], 10));
    setLoading(false);
  }, [page, rowsPerPage, endpoint]);

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

  return {
    options: {
      count,
      page: page - 1,
      rowsPerPage,
      onChangePage,
      onChangeRowsPerPage,
      ...options,
    },
    data,
    loading,
  };
}

export default usePagination;
