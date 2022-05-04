/**
 * Properties required of a route
 * @type
 */
export type AppRoute = {
  path: string;
  element: React.ReactNode;
};

export interface IGetAllProducts {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface IProductInCart extends IGetAllProducts {
  quantity: number;
}
export interface IOptions {
  label: string;
  value: string;
}
export interface IUserLoginDetails {
  username: string;
  password: string;
}
