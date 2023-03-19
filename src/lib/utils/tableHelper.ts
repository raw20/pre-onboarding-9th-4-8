import { createColumn } from 'react-chakra-pagination';
import { TODAY } from '@/constants/today';

export const transFormTodayData = (res: IOrderList[]) => {
  const todayData = res
    .filter((element) => element.transaction_time.includes(TODAY))
    .map((element) => ({
      id: element.id,
      transaction_time: element.transaction_time,
      status: element.status,
      customer_id: element.customer_id,
      customer_name: element.customer_name,
      currency: element.currency,
    }));

  return todayData;
};

export const getColumn = (todayData: IOrderList[]) => {
  const columnHelper = createColumn<(typeof todayData)[0]>();
  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: '주문번호',
    }),
    columnHelper.accessor('transaction_time', {
      cell: (info) => info.getValue(),
      header: '거래시간',
    }),
    columnHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: '주문처리상태',
    }),
    columnHelper.accessor('customer_id', {
      cell: (info) => info.getValue(),
      header: '고객번호',
    }),
    columnHelper.accessor('customer_name', {
      cell: (info) => info.getValue(),
      header: '고객이름',
    }),
    columnHelper.accessor('currency', {
      cell: (info) => info.getValue(),
      header: '가격',
    }),
  ];

  return columns;
};
