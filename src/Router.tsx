import { Navigate, Route, Routes } from 'react-router-dom';
import OrderList from './pages/OrderList';

const Router = () => {
  return (
    <Routes>
      <Route path="/list" element={<OrderList />} />
      <Route path="/*" element={<Navigate to="/list" replace={true} />} />
    </Routes>
  );
};

export default Router;
