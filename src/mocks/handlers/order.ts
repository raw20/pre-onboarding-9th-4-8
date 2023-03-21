import { rest } from 'msw';
import { formatDollarToNumber } from '@/lib/utils/formattingHelper';
import {
  generateSortedOrder,
  generateStartAndEndDate,
} from '@/lib/utils/generator';
import {
  DATE_QUERY_KEY,
  NAME_QUERY_KEY,
  SORT_QUERY_KEY,
  STATUS_QUERY_KEY,
} from '@/constants/queryKey';
import mockData from '../storage/mock_data.json';

export const orderListHandlers = [
  rest.get('/mock/order', (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset'));
    const limit = Number(req.url.searchParams.get('limit'));
    const date = req.url.searchParams.get(DATE_QUERY_KEY);
    const name = req.url.searchParams.get(NAME_QUERY_KEY) || '';
    const status = req.url.searchParams.get(STATUS_QUERY_KEY);
    const sortOrder = req.url.searchParams.get(SORT_QUERY_KEY);

    const dataOfSelectedDate = date
      ? mockData.filter((item) => item.transaction_time.split(' ')[0] === date)
      : mockData;

    const dataOfSelectedName = name
      ? dataOfSelectedDate.filter((item) =>
          item.customer_name.toLocaleLowerCase().includes(name.toLowerCase()),
        )
      : dataOfSelectedDate;

    const dataOfSortedOrderParams = generateSortedOrder(
      dataOfSelectedName,
      sortOrder,
    );

    const dataOfSelectedStatus =
      status === 'check'
        ? dataOfSortedOrderParams.filter((item) => item.status)
        : dataOfSortedOrderParams;

    const { startDate, endDate } =
      generateStartAndEndDate(dataOfSelectedStatus);

    return res(
      ctx.json({
        order: [...dataOfSelectedStatus].splice(offset * limit, limit),
        orderInfo: {
          totalCount: dataOfSelectedStatus.length,
          totalCurrency: dataOfSelectedStatus.reduce(
            (acc, cur) => acc + formatDollarToNumber(cur.currency),
            0,
          ),
          startDate,
          endDate,
        },
      }),
    );
  }),
];
