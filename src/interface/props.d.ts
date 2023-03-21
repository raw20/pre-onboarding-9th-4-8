import { IOrderData } from './main';

export interface ITableControllerProps {
  currentDate?: string | null;
  currentName?: string | null;
  currentStatus?: string | null;
  currentSortOrderId?: string | null;
  onSetParams: ({
    pageValue,
    dateValue,
    nameValue,
    statusValue,
    sortOrderIdValue,
    event,
  }: IOnSetParams) => void;
}

export interface IStatsAreaProps {
  data: IOrderData;
}
export interface IOrderTablePros extends IStatsAreaProps {
  currentPage?: number;
  currentDate?: string | null;
  currentName?: string | null;
  currentStatus?: string | null;
  currentSortOrderId?: string | null;
  onSetParams: ({
    pageValue,
    dateValue,
    nameValue,
    statusValue,
    sortOrderIdValue,
    event,
  }: IOnSetParams) => void;
}

export interface IErrorFallbackProps {
  resetErrorBoundary: (...args: unknown[]) => void;
}
