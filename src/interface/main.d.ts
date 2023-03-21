export interface IOrderItem {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}

export interface IOrderInfo {
  endDate: string;
  startDate: string;
  totalCount: number;
  totalCurrency: number;
}

export interface IOrderData {
  order: IOrderItem[];
  orderInfo: IOrderInfo;
}

export interface IOnSetParams {
  pageValue?: number;
  dateValue?: string;
  nameValue?: string;
  event?: React.ChangeEvent<HTMLInputElement>;
}
