import { useMutation } from "react-query";
import { IUserLoginDetails } from "../../types";
import { userLogin, userSignUp } from "../api/auth";

export const useLogin = (options = {}) => {
  const { mutate, isLoading, isError } = useMutation(userLogin, {
    mutationKey: "login",
    ...options,
  });

  return { mutate, isLoading, isError };
};

export const useSignup = (options = {}) => {
  const { mutate, isLoading, isError } = useMutation(userSignUp, {
    mutationKey: "signup",
    ...options,
  });

  return { mutate, isLoading, isError };
};
