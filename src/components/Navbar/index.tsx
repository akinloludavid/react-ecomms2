import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore, useUserStore } from "../../zust/store";
import { MdShoppingCart } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isMobile] = useMediaQuery("(max-width: 375px)");
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const { user, removeUserDetails } = useUserStore((state) => state);
  const handleLogout = () => {
    removeUserDetails();
    navigate("/");
  };

  useEffect(() => {
    !isMobile && onClose();
  }, [isMobile]);
  return (
    <>
      <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent w={"40%"} ml="auto">
          <ModalBody w={"100%"} m="auto">
            <>
              {user ? (
                <Button
                  color={"tomato"}
                  variant={"outline"}
                  onClick={handleLogout}
                  w="100%"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    w="100%"
                    onClick={() => {
                      navigate("/signin");
                      onClose();
                    }}
                  >
                    LOG IN
                  </Button>

                  <Button
                    mt={2}
                    variant={"outline"}
                    w="100%"
                    onClick={() => {
                      navigate("/signup");
                      onClose();
                    }}
                  >
                    SIGN UP
                  </Button>
                </>
              )}
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        justify={"space-between"}
        align="center"
        width={"100vw"}
        height="60px"
        px={[4, 10]}
        backgroundColor="cyan.600"
      >
        <Box>
          <Link to={"/"}>
            <Text fontSize={"32px"} fontWeight="500">
              E=COMMS
            </Text>
          </Link>
        </Box>

        <Flex align={"center"} display={"flex"} gap={4}>
          <Link to="/cart">
            <Box
              display={"flex"}
              alignItems="center"
              position={"relative"}
              gap={1}
              p={3}
            >
              {!isMobile && (
                <Text color={"#f3f3f3"} fontSize={"18px"}>
                  Cart
                </Text>
              )}
              <MdShoppingCart size={24} color="#f3f3f3" />
              <Box
                width={"16px"}
                height="16px"
                right={1}
                top={1}
                bgColor={"#fff"}
                borderRadius="50%"
                position={"absolute"}
              >
                <Text fontSize={"xs"} textAlign="center">
                  {cart.length}
                </Text>
              </Box>
            </Box>
          </Link>
          {isMobile && (
            <FaEllipsisV
              size={18}
              cursor="pointer"
              color="#fff"
              onClick={onOpen}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
