import styled from "@emotion/styled";
import React from "react";
import Select from "react-select";
import { IOptions } from "../../types";

interface ICustomSelect {
  options: any[];
  onChange: (options: IOptions) => void;
  placeholder: string;
  value?: any;
  isLoading?: boolean;
}
const CustomSelect = ({
  options = [],
  onChange,
  placeholder,
  isLoading,

  value,
  ...props
}: ICustomSelect) => {
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted skyblue",
      color: state.isSelected ? "#000" : "#030303",
      padding: 10,
      cursor: "pointer",
      backgroundColor: state.isSelected ? "skyblue" : "#f3f3f3",
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    indicatorSeparator: () => ({
      display: "none",
    }),
  };
  return (
    <CustomSelect.Wrapper>
      <Select
        styles={customStyles}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        isClearable={true}
        isSearchable
        isLoading={isLoading}
        value={value}
        {...props}
      />
    </CustomSelect.Wrapper>
  );
};

CustomSelect.Wrapper = styled.div`
  width: 100%;
`;

export default CustomSelect;
