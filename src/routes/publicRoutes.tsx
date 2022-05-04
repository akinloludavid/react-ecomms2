import React, { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import { PUBLIC_PATHS } from "./constants";
import { AppRoute } from "../types";

const { HOME, LOGIN, PRODUCT_DETAILS, SIGNUP, CART, CHECKOUT } = PUBLIC_PATHS;
const Home = WithSuspense(lazy(() => import("../pages/Home")));
const Login = WithSuspense(lazy(() => import("../pages/Login")));
const Signup = WithSuspense(lazy(() => import("../pages/Signup")));
const ProductDetails = WithSuspense(
  lazy(() => import("../pages/ProductDetails"))
);
const Checkout = WithSuspense(lazy(() => import("../pages/CheckoutPage")));
const CartPage = WithSuspense(lazy(() => import("../pages/CartPage")));
export const PUBLIC_ROUTES: AppRoute[] = [
  { path: HOME, element: <Home /> },
  { path: PRODUCT_DETAILS, element: <ProductDetails /> },
  { path: LOGIN, element: <Login /> },
  { path: SIGNUP, element: <Signup /> },
  { path: CART, element: <CartPage /> },
  { path: CHECKOUT, element: <Checkout /> },
  { path: "*", element: <h1>Page not found</h1> },
];
