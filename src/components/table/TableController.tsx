import { ButtonGroup, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { TODAY } from '@/constants/config';
import { ITableControllerProps } from '@/interface/props';
import SearchCustomerName from '../filter/SearchCustomerName';

const TableController = ({
  currentDate,
  currentName,
  currentStatus,
  currentSortOrderId,
  onSetParams,
}: ITableControllerProps) => {
  return (
    <>
      <SearchCustomerName currentName={currentName} onSetParams={onSetParams} />

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
                    nameValue: currentName,
                    statusValue: currentStatus,
                    sortOrderIdValue: currentSortOrderId,
                  })
                : onSetParams({
                    pageValue: 1,
                    dateValue: '',
                    nameValue: currentName,
                    statusValue: currentStatus,
                    sortOrderIdValue: currentSortOrderId,
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
                    dateValue: currentDate,
                    nameValue: currentName,
                    statusValue: 'check',
                    sortOrderIdValue: currentName,
                  })
                : onSetParams({
                    pageValue: 1,
                    dateValue: currentDate,
                    nameValue: currentName,
                    statusValue: '',
                    sortOrderIdValue: '',
                  })
            }
          />
        </FormControl>
      </ButtonGroup>
    </>
  );
};

export default TableController;
