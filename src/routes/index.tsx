import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRoutes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { customTheme } from "../styles/theme";
import { PUBLIC_ROUTES } from "./publicRoutes";

const AppWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        refetchInterval: 600_000,
        retry: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <Navbar />

        <AppWrapper key={location.pathname} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Pages;
