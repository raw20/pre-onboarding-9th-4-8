import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';
import { TODAY } from '@/constants/today';

const OrderListTable = ({ orderListData }: IOrderListTable) => {
  const todayData = orderListData.filter((element) =>
    element.transaction_time.includes(TODAY),
  );

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>주문목록 테이블</TableCaption>
          <Thead>
            <Tr>
              {orderListData.length > 0 &&
                Object.keys(orderListData[0])?.map((column) => (
                  <Th key={column}>{column}</Th>
                ))}
            </Tr>
          </Thead>
          <Tbody>
            {todayData.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.transaction_time}</Td>
                <Td>{row.status}</Td>
                <Td>{row.customer_id}</Td>
                <Td>{row.customer_name}</Td>
                <Td>{row.currency}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderListTable;
