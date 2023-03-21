import { ButtonGroup, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { TODAY } from '@/constants/config';
import useSetParams from '@/lib/hooks/useSetParams';
import SearchCustomerName from '../filter/SearchCustomerName';

const TableController = () => {
  const {
    currentDate,
    currentName,
    currentStatus,
    currentSortOrder,
    onSetParams,
  } = useSetParams();

  return (
    <>
      <SearchCustomerName />

      <ButtonGroup variant="outline" spacing="4">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="date" mb="0">
            Today
          </FormLabel>
          <Switch
            id="date"
            isChecked={!!currentDate}
            onChange={(e) =>
              e.target.checked
                ? onSetParams({
                    pageValue: 1,
                    dateValue: TODAY,
                    nameValue: currentName ? currentName : '',
                    statusValue: currentStatus ? currentStatus : '',
                    sortOrderValue: currentSortOrder ? currentSortOrder : '',
                  })
                : onSetParams({
                    pageValue: 1,
                    dateValue: '',
                    nameValue: currentName ? currentName : '',
                    statusValue: currentStatus ? currentStatus : '',
                    sortOrderValue: currentSortOrder ? currentSortOrder : '',
                  })
            }
          />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="status" mb="0">
            Complete
          </FormLabel>
          <Switch
            id="status"
            isChecked={!!currentStatus}
            onChange={(e) =>
              e.target.checked
                ? onSetParams({
                    pageValue: 1,
                    dateValue: currentDate ? currentDate : '',
                    nameValue: currentName ? currentName : '',
                    statusValue: 'check',
                    sortOrderValue: currentSortOrder ? currentSortOrder : '',
                  })
                : onSetParams({
                    pageValue: 1,
                    dateValue: currentDate ? currentDate : '',
                    nameValue: currentName ? currentName : '',
                    statusValue: '',
                    sortOrderValue: currentSortOrder ? currentSortOrder : '',
                  })
            }
          />
        </FormControl>
      </ButtonGroup>
    </>
  );
};

export default TableController;
