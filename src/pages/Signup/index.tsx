import React, { useState } from "react";
import { Box, Input, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useCustomToast from "../../utils/notifications";
import { useSignup } from "../../services/query/auth";
import { useUserStore } from "../../zust/store";

const Signup = () => {
  const { successToast, errorToast } = useCustomToast();
  const { saveUserSignupDetails } = useUserStore((state) => state);
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "",
  });
  const {
    email,
    username,
    password,
    name: { firstname, lastname },
    phone,
    address: {
      geolocation: { lat, long },
    },
  } = userDetails;

  const { mutate, isLoading: isSignupLoading } = useSignup({
    onSuccess: (res: any) => {
      successToast("Signup successful");
      saveUserSignupDetails(res);
    },
    onError: (err: any) => {
      console.log(err?.response);
      errorToast("Sign up failed");
    },
  });
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    mutate(userDetails);
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
        <Text fontSize={["lg", " -0xl"]} fontWeight="bold">
          Create Account
        </Text>
        <Flex gap={[0, 4]} direction={["column", "row"]}>
          <Input
            value={firstname}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                name: {
                  ...userDetails.name,
                  firstname: e.target.value,
                },
              })
            }
            mb="4"
            placeholder="firstname"
          />
          <Input
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                name: {
                  ...userDetails.name,
                  lastname: e.target.value,
                },
              })
            }
            value={lastname}
            mb="4"
            placeholder="lastname"
          />
        </Flex>
        <Input
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              username: e.target.value,
            })
          }
          value={username}
          mb="4"
          placeholder="username"
        />
        <Input
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              phone: e.target.value,
            })
          }
          value={phone}
          mb="4"
          placeholder="phone"
        />
        <Input
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              email: e.target.value,
            })
          }
          value={email}
          mb="4"
          placeholder="email"
        />
        <Input
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            })
          }
          value={password}
          mb="4"
          placeholder="password"
        />

        <Button onClick={handleSubmit}>SIGN UP</Button>

        <Flex mt={3} gap={2}>
          <Text>Already have an account?</Text>
          <Link to="/signin" style={{ textDecoration: "underline" }}>
            Sign In
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
