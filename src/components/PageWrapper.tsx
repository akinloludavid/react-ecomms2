import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface IChildren {
  children: React.ReactNode;
}
const PageWrapper = ({ children }: IChildren) => {
  return (
    <Box display={"flex"} flexDirection="column" w="100%" minH={"100vh"}>
      <Navbar />
      {children}
      <Box mt={"auto"}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PageWrapper;
