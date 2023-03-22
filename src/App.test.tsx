import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import queryClient from '@/lib/queryClient';
import App from './App';

test('App render', () => {
  const { heading } = setup();

  expect(heading).toBeInTheDocument();
});

const setup = () => {
  render(
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>,
  );
  const heading = screen.getByRole('heading');

  return { heading };
};
