import { ToastPositionWithLogical, useToast } from "@chakra-ui/react";
const useCustomToast = () => {
  const toast = useToast();

  const successToast = (
    successMsg: string = "Operation successful",
    pos: ToastPositionWithLogical = "top-right"
  ) => {
    return toast({
      status: "success",
      title: "Success",
      description: successMsg,
      position: pos,
      isClosable: true,
    });
  };
  const errorToast = (
    errorMessage: string = "Error occurred",
    pos: ToastPositionWithLogical = "top-right"
  ) => {
    return toast({
      status: "error",
      title: "Error",
      description: errorMessage,
      position: pos,
      isClosable: true,
    });
  };
  return {
    successToast,
    errorToast,
  };
};

export default useCustomToast;
