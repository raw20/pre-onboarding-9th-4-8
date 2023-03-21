import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  name: string | null,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date],
    queryFn: () =>
      getOrderData(pageNum - 1, date, name).then((res) => res.data),
    refetchInterval: 5000,
  });
};

export default useGetOrderData;
