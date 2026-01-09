import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { Row } from './row';
import { useEffect, useState, useCallback } from 'react';
import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';
import { Filter, FilterOption } from './styles';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('/orders');
        setOrders(data);
        setFilteredOrders(data);
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      }
    }

    loadOrders();
  }, []);

  const createData = useCallback((order) => {
    return {
      _id: order._id,
      name: order.user?.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products ?? [],
    }; 
  }, []);

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders, createData]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }
    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    }else {
      const statusIndex = orderStatusOptions.findIndex(item => item.id === activeStatus);
      const newFilteredOrders = orders.filter((order) => order.status === orderStatusOptions[statusIndex].value);
      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row._id} row={row} orders={orders} setOrders={setOrders} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
