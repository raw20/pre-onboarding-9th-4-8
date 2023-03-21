import StatsArea from '@/components/stats/StatsArea';
import OrderTableArea from '@/components/table/OrderTableArea';
import DatePicker from '@/components/filter/DatePicker';
import useSetParams from '@/lib/hooks/useSetParams';
import useGetOrderData from '@/lib/hooks/useGetOrderData';

const AdminPage = () => {
  const { currentPage, currentDate, currentName, currentStatus, onSetParams } =
    useSetParams();
  const { data } = useGetOrderData(
    currentPage,
    currentDate,
    currentName,
    currentStatus,
  );
  const propsData = {
    currentPage,
    currentName,
    currentDate,
    currentStatus,
    data,
    onSetParams,
  };

  return (
    <>
      <StatsArea data={data} />
      <DatePicker />
      <OrderTableArea {...propsData} />
    </>
  );
};

export default AdminPage;
