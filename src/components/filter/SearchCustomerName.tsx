import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { ITableControllerProps } from '@/interface/props';

const SearchCustomerName = ({ onSetParams }: ITableControllerProps) => {
  const [cutomerName, setCustomerName] = useState('');

  return (
    <InputGroup w={300} backgroundColor="#fff">
      <InputLeftElement>
        <SearchIcon color="blue.500" />
      </InputLeftElement>
      <Input
        type="text"
        value={cutomerName}
        placeholder="유저 검색"
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <InputRightElement w={100}>
        <Button onClick={() => onSetParams({ nameValue: cutomerName })}>
          검색
        </Button>
        <IconButton
          onClick={() => onSetParams({ nameValue: '' })}
          aria-label="리셋"
          icon={<RepeatIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchCustomerName;
