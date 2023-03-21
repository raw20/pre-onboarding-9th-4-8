import { Button, ButtonGroup } from '@chakra-ui/react';
import { TODAY } from '@/constants/config';
import { ITableControllerProps } from '@/interface/props';
import SearchCustomerName from '../filter/SearchCustomerName';

const TableController = ({
  currentName,
  onSetParams,
}: ITableControllerProps) => {
  return (
    <>
      <SearchCustomerName currentName={currentName} onSetParams={onSetParams} />
      <ButtonGroup variant="outline" spacing="4">
        <Button
          colorScheme="blue"
          size="sm"
          onClick={() =>
            onSetParams({ pageValue: 1, dateValue: '', nameValue: '' })
          }
        >
          전체 주문보기
        </Button>
        <Button
          colorScheme="blue"
          size="sm"
          onClick={() =>
            onSetParams({ pageValue: 1, dateValue: TODAY, nameValue: '' })
          }
        >
          오늘의 주문보기
        </Button>
      </ButtonGroup>
    </>
  );
};

export default TableController;
