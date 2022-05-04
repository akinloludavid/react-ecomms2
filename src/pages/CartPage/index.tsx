import React, { useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdDelete, MdOutlineArrowBack } from "react-icons/md";
import { useCartStore } from "../../zust/store";
import { convertPriceToNaira, trimString } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 375px)");
  const navigate = useNavigate();
  const {
    cart,
    increaseProductQty,
    reduceProductQuantity,
    removeFromCart,
    getTotalAmount,
  } = useCartStore((state) => state);

  const totalAmount = cart
    .map((pro: any) => pro.totalPrice)
    .reduce((acc: any, curr: any) => acc + curr, 0);

  useEffect(() => {
    getTotalAmount();
  }, [cart]);
  const handleIncreaseProductQuantity = (prod: any) => {
    increaseProductQty(prod);
  };

  const handleDecreaseProductQuantity = (prod: any) => {
    reduceProductQuantity(prod);
  };
  const handleProductDeleteFromCart = (prod: any) => {
    removeFromCart(prod);
  };

  const cartLength = cart.length;
  return (
    <Box p={[2, 10, 10, 20]}>
      <Flex align={"center"} gap={2}>
        <Box
          display="flex"
          alignItems={"center"}
          gap={2}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <MdOutlineArrowBack />
          <Text>Back To shopping</Text>
        </Box>
      </Flex>

      <Box mt={4}>
        <Text fontSize={24} fontWeight={"semibold"}>
          Shopping Cart: ({cartLength})
        </Text>
      </Box>

      {cart.length > 0 ? (
        cart.map((prod: any) => (
          <Grid
            shadow={"lg"}
            key={prod.id}
            templateColumns={["repeat(12, 1fr)"]}
            gap={6}
            p={[4]}
            mb={6}
          >
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Box>
                <Box width={["100%", "100%"]} borderRadius={"4px"}>
                  <Image width={"100%"} src={prod.image} />
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={[8, 8, 10, 6]}>
              <Box width={"100%"} fontSize={["12px", "14px"]}>
                <Text as="h1" fontWeight={600} fontSize={"18px"}>
                  Product Details
                </Text>
                <Text>Category: {prod.category}</Text>

                <Text>{prod.title}</Text>
                <Text>{trimString(prod.description, 90)}</Text>
                {isMobile && (
                  <Text fontWeight={"bold"} color={"#030303"}>
                    {convertPriceToNaira(prod.price)}
                  </Text>
                )}
              </Box>
            </GridItem>
            {!isMobile && (
              <GridItem colSpan={[6, 4, 4, 1]}>
                <Box>
                  <Text color={"gray.600"}>Unit Price</Text>
                  <Text fontWeight={"bold"} color={"#030303"}>
                    {convertPriceToNaira(prod.price)}
                  </Text>
                </Box>
              </GridItem>
            )}
            <GridItem colSpan={[6, 4, 4, 2]}>
              <Flex direction={"column"} height="100%">
                <Text color={"gray.600"} mb={2}>
                  Actions
                </Text>
                <ButtonGroup
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Button
                    disabled={prod.quantity === 1}
                    onClick={() => handleDecreaseProductQuantity(prod)}
                  >
                    -
                  </Button>
                  <Text>{prod.quantity}</Text>
                  <Button onClick={() => handleIncreaseProductQuantity(prod)}>
                    +
                  </Button>
                </ButtonGroup>
                <Button
                  mt="auto"
                  mb={2}
                  variant="outline"
                  onClick={() => handleProductDeleteFromCart(prod)}
                >
                  <MdDelete /> Remove{" "}
                </Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={[6, 4, 4, 1]}>
              <Box>
                <Text color={"gray.600"}>Sub total</Text>
                <Text fontWeight={"semibold"}>
                  {convertPriceToNaira(prod.totalPrice)}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        ))
      ) : (
        <Box
          mt={6}
          p={[2, 6]}
          boxShadow="outline"
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
        >
          <Text textAlign={"center"} mb={8}>
            You don't have any products in your cart.
          </Text>
          <Button
            onClick={() => navigate("/")}
            variant={"outline"}
            fontSize="12px"
            color={"gray.600"}
            w={["100%", "50%"]}
            m="auto"
          >
            Continue Shopping to Add Items
          </Button>
        </Box>
      )}

      {cart.length > 0 && (
        <Flex
          flexDirection="column"
          align={"center"}
          w={["100%", "50%"]}
          justify={"center"}
          m="auto"
        >
          <Button
            onClick={() => navigate("/")}
            variant={"unstyled"}
            fontSize="12px"
            color={"gray.600"}
            w={["100%", "50%"]}
          >
            Continue Shopping to Add Items
          </Button>
          <Flex justify={"space-between"} w="100%">
            <Text color={"gray.600"}>Total Price: </Text>
            <Text fontWeight={"semibold"}>
              {convertPriceToNaira(totalAmount)}
            </Text>
          </Flex>
          <Button
            display={"flex"}
            gap={2}
            mt={8}
            width={"100%"}
            onClick={() => navigate("/checkout")}
          >
            <Text>CHECKOUT</Text>
            <Text fontSize={"18px"} fontWeight={"semibold"}>
              {convertPriceToNaira(totalAmount)}
            </Text>
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default CartPage;
