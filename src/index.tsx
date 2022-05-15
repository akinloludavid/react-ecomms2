import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./styles/theme";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: 600_000,
      retry: 2,
      refetchOnReconnect: false,
    },
  },
});
root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
);
