import React from "react";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo512.png";
const Footer = () => {
  return (
    <Flex
      justify={"center"}
      flexDirection="column"
      py={3}
      mb={0}
      mt="auto"
      bgColor="cyan.500"
      color="#f3f3f3"
      height={"120px"}
    >
      <Box
        w="100%"
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        mb={2}
        gap={2}
      >
        <Image w="30px" src={logo} />
        <Text textAlign={"center"}>BUYMORE</Text>
      </Box>
      <Divider />
      <Text textAlign={"center"} mt={2}>
        All Rights Reserved {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
