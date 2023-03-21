import { ITEMS_PER_PAGE } from '@/constants/units';
import apiClient from './apiClient';

export const getOrderData = async (
  offset: number,
  date: string | null,
  name: string | null,
  status: string | null,
  sortDescOrder: string | null,
) => {
  return await apiClient({
    method: 'get',
    url: '/mock/order',
    params: {
      offset,
      date,
      name,
      status,
      sortDescOrder,
      limit: ITEMS_PER_PAGE,
    },
  });
};
