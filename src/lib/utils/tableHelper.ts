import { createColumn } from 'react-chakra-pagination';

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
