import React from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useGetProductById } from "../../services/query/products";
import { FaShoppingCart } from "react-icons/fa";
import { convertPriceToNaira } from "../../utils/helper";
import AddToCartButton from "../../components/AddToCart/Button";
const ProductDetails = () => {
  const { productId = "" } = useParams();

  const { data: product, isLoading } = useGetProductById(productId);

  if (isLoading) {
    return <h2>loadding</h2>;
  }
  return (
    <Box p={"40px"}>
      <Link to="/">
        <Flex alignItems={"center"} gap={2}>
          <MdArrowBack fontSize={20} />
          <Text>Back to All Products</Text>
        </Flex>
      </Link>

      <Flex
        mt={6}
        direction={["column", "row"]}
        justify={["center", "flex-start"]}
      >
        <Box
          display={"flex"}
          width={["100%", "50%"]}
          justifyContent={["center", "flex-start"]}
        >
          <Image width={"80%"} height="100%" src={product.image} />
        </Box>
        <Box width={["100%", "50%"]}>
          <Text fontSize="3xl" fontWeight={"500"} mb={4}>
            {product.title}
          </Text>
          <Text fontSize="lg" mb={4}>
            <Box as={"span"} fontWeight="bold">
              Category:
            </Box>{" "}
            {product.category}
          </Text>
          <Text fontSize="lg">
            <Box as={"span"} fontWeight="bold">
              Description:
            </Box>{" "}
            {product.description}
          </Text>
          <Box shadow={"md"} p={2} mt={6}>
            <Text fontSize="lg" fontWeight={"600"}>
              <Box as={"span"} fontWeight="bold">
                Price:
              </Box>{" "}
              {convertPriceToNaira(product.price)}
            </Text>
            <Box mt="6" display="flex" flexDirection={"column"}>
              <AddToCartButton product={product} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetails;
