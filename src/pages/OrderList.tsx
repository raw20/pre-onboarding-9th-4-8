import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import useFetch from '@/lib/hooks/useFetch';
import { API_URL } from '@/constants/url';
import OrderListTable from '@/components/OrderListTable';
import { transFormTodayData } from '@/lib/utils/tableHelper';

const OrderList = () => {
  const [orderListData, isLoading, isError] = useFetch<IOrderList[]>(
    [],
    API_URL,
    transFormTodayData,
  );

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <VStack>
      <Box>
        <Heading size="sm" as="h3">
          주문 목록
        </Heading>
      </Box>
      <OrderListTable orderListData={orderListData} />
    </VStack>
  );
};

export default OrderList;
