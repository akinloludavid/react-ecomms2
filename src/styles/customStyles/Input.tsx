const primary = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 5,

    borderColor: "yellow",
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    bg: "#F6F7F9",
    fontSize: "sm",
    _focus: {
      border: "2px solid skyblue",
      borderColor: "none",
    },
    _placeholder: {
      color: "#7A8395",
    },
  },
};

export const InputStyles = {
  variants: {
    primary,
  },
};
