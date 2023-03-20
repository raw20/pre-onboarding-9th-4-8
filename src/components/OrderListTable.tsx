import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { Table } from 'react-chakra-pagination';
import { useSearchParams } from 'react-router-dom';
import { getColumn } from '@/lib/utils/tableHelper';
import { TODAY } from '@/constants/today';

const OrderListTable = ({ orderListData }: IOrderListTable) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [toggle, setToggle] = useState(false);
  const columns = getColumn(orderListData);

  const pageIndex = Number(searchParams.get('page')) || 1;
  const todayChecked = searchParams?.get('today') === 'true';
  const filterData = orderListData.filter((element) =>
    element.transaction_time.includes(TODAY),
  );

  return (
    <Box p="12">
      <Box>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="today-alerts" mb="0">
            오늘
          </FormLabel>
          <Switch
            id="today-alerts"
            isChecked={todayChecked}
            onChange={() => {
              setToggle(!toggle);
              setSearchParams(
                `page=${encodeURIComponent(pageIndex)}&today=${!toggle}`,
              );
            }}
          />
        </FormControl>
      </Box>

      <Box mt="6">
        <Table
          colorScheme="blue"
          totalRegisters={
            todayChecked ? filterData.length : orderListData.length
          }
          itemsPerPage={50}
          page={
            todayChecked && pageIndex > filterData.length ? 1 : pageIndex - 1
          }
          onPageChange={(page) => {
            setSearchParams(
              `page=${encodeURIComponent(page)}&today=${todayChecked}`,
            );
          }}
          columns={columns}
          data={todayChecked ? filterData : orderListData}
        />
      </Box>
    </Box>
  );
};

export default OrderListTable;
