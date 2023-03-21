import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  name: string | null,
  status: string | null,
  sortOrder: string | null,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, name, status, sortOrder],
    queryFn: () =>
      getOrderData(pageNum - 1, date, name, status, sortOrder).then(
        (res) => res.data,
      ),
    refetchInterval: 5000,
  });
};

export default useGetOrderData;
