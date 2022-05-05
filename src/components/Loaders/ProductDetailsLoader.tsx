import { Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const ProductDetailsLoader = () => {
  return (
    <Grid
      justifyContent={"center"}
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      gap={6}
      p={4}
    >
      <GridItem>
        <Skeleton height={"400px"}></Skeleton>
      </GridItem>
      <GridItem>
        <SkeletonText noOfLines={6} mb={2}></SkeletonText>
        <SkeletonText noOfLines={6} mb={2}></SkeletonText>

        <Skeleton height={"50px"}></Skeleton>
      </GridItem>
    </Grid>
  );
};

export default ProductDetailsLoader;
