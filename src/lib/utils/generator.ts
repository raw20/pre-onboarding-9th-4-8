import { IOrderItem } from '@/interface/main';
import { formatDate } from './formattingHelper';

const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const generateStartAndEndDate = (data: IOrderItem[]) => {
  const dateList = data.map(
    ({ transaction_time }) => new Date(transaction_time),
  );

  const startDate = formatDate(minDate(dateList));
  const endDate = formatDate(maxDate(dateList));

  return { startDate, endDate };
};

export const generateZeroToNArr = (n: number) => Array.from(Array(n).keys());
export const generateSortedOrder = (
  order: IOrderItem[],
  sortOrder: string | null,
) => {
  return order.sort((a, b) => {
    if (sortOrder === 'IDup') {
      return a.id - b.id;
    }
    if (sortOrder === 'IDdown') {
      return b.id - a.id;
    }
    if (sortOrder === 'TIMEup') {
      return (
        Number(new Date(a.transaction_time)) -
        Number(new Date(b.transaction_time))
      );
    }
    if (sortOrder === 'TIMEdown') {
      return (
        Number(new Date(b.transaction_time)) -
        Number(new Date(a.transaction_time))
      );
    }
    return a.id - b.id;
  });
};
