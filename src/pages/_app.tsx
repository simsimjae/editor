import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const theme = extendTheme({
  colors: {
    blue: {
      50: '#EDF5FF',
      100: '#D0E2FF',
      200: '#A6C8FF',
      300: '#78A9FF',
      400: '#4589FF',
      500: '#0F62FE',
      600: '#0043CE',
      700: '#002D9C',
      800: '#001D6C',
      900: '#001141',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
