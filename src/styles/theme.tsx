import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./customStyles/Button";
import { InputStyles as Input } from "./customStyles/Input";
const components = {
  Button,
  Input,
  ListItem: {},
};
export const customTheme = extendTheme({
  components,
});
