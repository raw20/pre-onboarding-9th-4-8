import { IOrderData } from './main';

export interface ITableControllerProps {
  currentName: string | null | undefined;
  onSetParams: ({
    pageValue,
    dateValue,
    nameValue,
    event,
  }: IOnSetParams) => void;
}

export interface IStatsAreaProps {
  data: IOrderData;
}
export interface IOrderTablePros extends IStatsAreaProps {
  currentPage?: number | undefined;
  currentName?: string | null;
  onSetParams: ({
    pageValue,
    dateValue,
    nameValue,
    event,
  }: IOnSetParams) => void;
}

export interface IErrorFallbackProps {
  resetErrorBoundary: (...args: unknown[]) => void;
}
