import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ITableControllerProps } from '@/interface/props';

const SearchCustomerName = ({ onSetParams }: ITableControllerProps) => {
  const [cutomerName, setCustomerName] = useState('');

  return (
    <InputGroup w={200} backgroundColor="#fff">
      <InputLeftElement>
        <SearchIcon color="blue.500" />
      </InputLeftElement>
      <Input
        type="text"
        value={cutomerName}
        placeholder="유저 검색"
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <InputRightElement>
        <Button onClick={() => onSetParams({ nameValue: cutomerName })}>
          검색
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchCustomerName;
