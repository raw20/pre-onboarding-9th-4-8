import StatsArea from '@/components/stats/StatsArea';
import OrderTableArea from '@/components/table/OrderTableArea';
import DatePicker from '@/components/filter/DatePicker';
import useSetParams from '@/lib/hooks/useSetParams';
import useGetOrderData from '@/lib/hooks/useGetOrderData';

const AdminPage = () => {
  const { currentPage, currentDate, currentName, onSetParams } = useSetParams();
  const { data } = useGetOrderData(currentPage, currentDate, currentName);
  const propsData = {
    currentPage,
    currentName,
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
