import { darken, mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: "none",
    _focus: { boxShadow: "none" },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: any) => ({
      bg: "cyan.600",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#f3f3f3",
      _hover: {
        bg: mode("cyan.700", darken("cyan.600", 20))(props),
        boxShadow: "md",
        color: "#fff",
        _disabled: {
          bg: "gray",
          color: "#fff",
        },
      },
    }),
    secondary: () => ({
      bg: "#EEEEEE",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: "500",
      _hover: {
        bg: "#E5EBF5",
        boxShadow: "md",
        outline: "none",
      },
    }),
    secondaryOutline: () => ({
      bg: "#3E3E3E",
      border: "1px solid",
      borderRadius: "4px",
      transition: "all 200ms ease",
      color: "#ffffff",
      _hover: {
        bg: "transparent",
        color: "#000000",

        boxShadow: "md",
        transform: "scale(1.02)",
      },
      _focus: {
        outline: "none",
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
