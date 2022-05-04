import React, { SyntheticEvent, useState } from "react";
import {
  Box,
  Input,
  Button,
  Flex,
  Text,
  FormControl,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLogin } from "../../services/query/auth";
import useCustomToast from "../../utils/notifications";
import { isPasswordValid, isUserNameValid } from "../../utils/helper";
import { useUserStore } from "../../zust/store";

const Login = () => {
  const navigate = useNavigate();
  const { user, saveUserDetails } = useUserStore();
  const { successToast, errorToast } = useCustomToast();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [validationError, setValidationError] = useState({
    userNameError: "",
    passwordError: "",
  });

  const { userNameError, passwordError } = validationError;
  const [passwordType, setPasswordType] = useState("password");

  const { username, password } = userDetails;

  const handlePasswordType = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const { mutate, isLoading: isLoginLoading } = useLogin({
    onSuccess: (res: any) => {
      successToast("Login successful");
      navigate(-1);
      saveUserDetails({ token: res, ...userDetails });
    },
    onError: (err: any) => errorToast(err?.response?.data),
  });
  const handleSubmit = (e: SyntheticEvent) => {
    // e.preventDefault();
    if (!!isUserNameValid(username) || !!isPasswordValid(password)) {
      return;
    }
    mutate({
      username: "mor_2314",
      password: "83r5^_",
    });
  };
  return (
    <Flex
      flexDirection="column"
      justify={"center"}
      align="center"
      bgColor={"gray.200"}
      height="100vh"
      overflowY={"hidden"}
    >
      <Flex
        bgColor={"#FFF"}
        width={["90%", "60%"]}
        p={4}
        flexDirection="column"
      >
        <Text fontSize={["lg", "4xl"]} fontWeight="bold">
          Login
        </Text>
        <FormControl>
          <Input
            value={username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            mb="4"
            required
            type={"text"}
            placeholder="Username"
          />
          <Text mt={"-3"} mb={1} fontSize="sm" color={"tomato"}>
            {username && isUserNameValid(username)}
          </Text>
          <InputGroup>
            <Input
              value={password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              mb="4"
              required
              type={passwordType}
              placeholder="password"
            />
            <InputRightElement
              onClick={handlePasswordType}
              cursor="pointer"
              children={
                passwordType === "password" ? (
                  <AiFillEyeInvisible />
                ) : (
                  <AiFillEye />
                )
              }
            />
          </InputGroup>
          <Text mt={"-3"} mb={1} fontSize="sm" color={"tomato"}>
            {password && isPasswordValid(password)}
          </Text>
          <Button
            isLoading={isLoginLoading}
            onClick={handleSubmit}
            type="submit"
            width={"100%"}
          >
            SIGN IN
          </Button>
        </FormControl>

        <Flex mt={3} gap={2}>
          <Text>Dont have an account?</Text>
          <Link to="/signup" style={{ textDecoration: "underline" }}>
            Sign Up
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
