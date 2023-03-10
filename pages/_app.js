import "../Theme/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
