import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useGetAllCategories } from "../../services/query/category";
import CustomSelect from "../custom-select";
import { IOptions } from "../../types";
import {
  categorySelector,
  searchTermSelector,
  useStore,
} from "../../zust/store";
import { MdSearch } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const FilterSection = () => {
  const selectCategory = useStore(categorySelector);
  const setSearchTerm = useStore(searchTermSelector);
  const searchTerm = useStore((state) => state.searchTerm);
  const { data: categories, isLoading: isCategoryLoading } =
    useGetAllCategories();
  const categoryOptions = categories?.map((el: string) => ({
    label: el,
    value: el,
  }));
  const handleCategoryChange = (options: IOptions) => {
    if (options) {
      selectCategory(options.value);
    } else {
      selectCategory("");
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      width={"100%"}
      // height="60px"
      bgColor={"gray.200"}
      py={2}
      gap={[2, 10]}
      flexDirection={["column", "row"]}
    >
      <Text>Filter By: </Text>
      <Box width={["75%", "20%"]}>
        <CustomSelect
          onChange={handleCategoryChange}
          placeholder="Select category"
          isLoading={isCategoryLoading}
          options={categoryOptions}
        />
      </Box>
      <Box width={["75%", "20%"]}>
        <InputGroup>
          <InputLeftElement children={<MdSearch />} />
          <Input
            variant={"primary"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bgColor={"white"}
            borderColor={"white"}
            placeholder="Search for product"
          />
          {searchTerm && (
            <InputRightElement
              children={
                <FaTimes
                  onClick={() => setSearchTerm("")}
                  cursor={"pointer"}
                  color="rgba(0,0,0,0.4)"
                />
              }
            />
          )}
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default FilterSection;
