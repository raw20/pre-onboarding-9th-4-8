import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Table } from 'react-chakra-pagination';
import { getColumn } from '@/lib/utils/tableHelper';

const OrderListTable = ({ orderListData }: IOrderListTable) => {
  const [page, setPage] = useState(1);
  const columns = getColumn(orderListData);

  return (
    <Box p="12">
      <Heading size="sm" as="h3">
        List of Users
      </Heading>

      <Box mt="6">
        <Table
          colorScheme="blue"
          totalRegisters={orderListData.length}
          itemsPerPage={50}
          page={page}
          onPageChange={(pageNum) => setPage(pageNum)}
          columns={columns}
          data={orderListData}
        />
      </Box>
    </Box>
  );
};

export default OrderListTable;
