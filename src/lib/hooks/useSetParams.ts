import { useSearchParams } from 'react-router-dom';
import { IOnSetParams } from '@/interface/main';
import {
  DATE_QUERY_KEY,
  NAME_QUERY_KEY,
  PAGE_QUERY_KEY,
  SORTORDERID_QUERY_KEY,
  STATUS_QUERY_KEY,
} from '@/constants/queryKey';

const useSetParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(PAGE_QUERY_KEY)) || 1;
  const currentDate = searchParams.get(DATE_QUERY_KEY);
  const currentName = searchParams.get(NAME_QUERY_KEY);
  const currentStatus = searchParams.get(STATUS_QUERY_KEY);
  const currentSortOrderId = searchParams.get(SORTORDERID_QUERY_KEY);
  const onSetParams = ({
    pageValue,
    dateValue,
    nameValue,
    statusValue,
    sortOrderIdValue,
    event,
  }: IOnSetParams) => {
    if (pageValue !== undefined)
      searchParams.set(PAGE_QUERY_KEY, String(pageValue));
    if (dateValue !== undefined)
      searchParams.set(DATE_QUERY_KEY, String(dateValue));
    if (nameValue !== undefined)
      searchParams.set(NAME_QUERY_KEY, String(nameValue));
    if (statusValue !== undefined)
      searchParams.set(STATUS_QUERY_KEY, String(statusValue));
    if (sortOrderIdValue !== undefined)
      searchParams.set(SORTORDERID_QUERY_KEY, String(sortOrderIdValue));
    if (event) searchParams.set(DATE_QUERY_KEY, String(event.target.value));

    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  return {
    currentPage,
    currentDate,
    currentName,
    currentStatus,
    currentSortOrderId,
    onSetParams,
  };
};

export default useSetParams;
