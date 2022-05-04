import { Button } from "@chakra-ui/react";
import React, { SyntheticEvent } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { IGetAllProducts } from "../../types";
import useCustomToast from "../../utils/notifications";
import { useCartStore } from "../../zust/store";

const AddToCartButton = ({ product, handleClick }: any) => {
  const { successToast } = useCustomToast();
  const { cart, addToCart, removeFromCart } = useCartStore((state) => state);
  const isProductInCart = cart.find(
    (prod: IGetAllProducts) => prod.id === product.id
  );

  const handleAddProductToCart = (e: SyntheticEvent) => {
    e.preventDefault();
    addToCart(product);
    successToast("Product Added to Cart", "bottom-right");
  };
  const handleRemoveProductFromCart = (e: SyntheticEvent) => {
    e.preventDefault();
    removeFromCart(product);
    successToast("Product removed successfully", "bottom-right");
  };
  return isProductInCart ? (
    <Button
      onClick={(e) => handleRemoveProductFromCart(e)}
      mt="auto"
      width={"100%"}
      variant="solid"
      leftIcon={<AiFillDelete />}
    >
      Remove From Cart
    </Button>
  ) : (
    <Button
      onClick={(e) => handleAddProductToCart(e)}
      mt="auto"
      width={"100%"}
      leftIcon={<FaShoppingCart />}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
