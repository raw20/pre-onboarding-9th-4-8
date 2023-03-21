import StatsArea from '@/components/stats/StatsArea';
import OrderTableArea from '@/components/table/OrderTableArea';
import DatePicker from '@/components/filter/DatePicker';

const AdminPage = () => {
  return (
    <>
      <StatsArea />
      <DatePicker />
      <OrderTableArea />
    </>
  );
};

export default AdminPage;
