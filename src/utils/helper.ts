export const trimString = (str: string, pos = 20) => {
  return str.length < pos ? str : str.slice(0, pos) + "...";
};

export const convertPriceToNaira = (price: string | number) => {
  const options = { style: "currency", currency: "NGN" };
  return new Intl.NumberFormat("en-NG", options).format(100 * Number(price));
};

export const isUserNameValid = (str: string) => {
  return str.length >= 6 ? "" : "Username should be at least 6 characters";
};

export const isPasswordValid = (str: string) => {
  return str.length >= 8 ? "" : "Password should be at least 8 characters";
};
