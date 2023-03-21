import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  Box,
  Spacer,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {
  CheckIcon,
  WarningIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { IOrderItem } from '@/interface/main';
import { formatPageInfo } from '@/lib/utils/formattingHelper';
import useSetParams from '@/lib/hooks/useSetParams';
import useGetOrderData from '@/lib/hooks/useGetOrderData';
import TableController from './TableController';
import TablePagination from './TablePagination';

const OrderTableArea = () => {
  const {
    currentPage,
    currentDate,
    currentName,
    currentStatus,
    currentSortOrder,
    onSetParams,
  } = useSetParams();
  const { data } = useGetOrderData(
    currentPage,
    currentDate,
    currentName,
    currentStatus,
    currentSortOrder,
  );

  return (
    <Box bg="white" w="100%" borderRadius="2xl" p="1em 2em">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">주문 테이블</Heading>
        </Box>
        <Spacer />
        <TableController />
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {formatPageInfo(
              currentPage ? currentPage : 1,
              data.order.length,
              data.orderInfo.totalCount,
            )}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>
                Order ID
                <IconButton
                  aria-label="오름차순"
                  icon={<ChevronUpIcon />}
                  onClick={() => onSetParams({ sortOrderValue: 'IDup' })}
                />
                <IconButton
                  aria-label="내림차순"
                  icon={
                    <ChevronDownIcon
                      onClick={() => onSetParams({ sortOrderValue: 'IDdown' })}
                    />
                  }
                />
              </Th>
              <Th>Status</Th>
              <Th>Customer Name / ID</Th>
              <Th>
                Time
                <IconButton
                  aria-label="오름차순"
                  icon={<ChevronUpIcon />}
                  onClick={() => onSetParams({ sortOrderValue: 'TIMEup' })}
                />
                <IconButton
                  aria-label="내림차순"
                  icon={
                    <ChevronDownIcon
                      onClick={() =>
                        onSetParams({ sortOrderValue: 'TIMEdown' })
                      }
                    />
                  }
                />
              </Th>
              <Th>Currency</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.order.map((orderItem: IOrderItem) => {
              return (
                <Tr key={orderItem.id}>
                  <Td>{orderItem.id}</Td>
                  <Td>
                    {orderItem.status ? (
                      <Flex gap={1}>
                        <Icon as={CheckIcon} w={5} h={5} color="green.500" />
                        Complete
                      </Flex>
                    ) : (
                      <Flex gap={1}>
                        <Icon as={WarningIcon} w={5} h={5} color="orange.500" />
                        Incomplete
                      </Flex>
                    )}
                  </Td>
                  <Td>
                    {orderItem.customer_name} / {orderItem.customer_id}
                  </Td>
                  <Td>{orderItem.transaction_time}</Td>
                  <Td>{orderItem.currency}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <TablePagination />
    </Box>
  );
};

export default OrderTableArea;
