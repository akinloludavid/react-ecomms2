import React from "react";
import { Box, Skeleton, SkeletonText, Grid } from "@chakra-ui/react";
const LoadingCards = () => {
  return (
    <Box maxW={"320px"} p={2}>
      <Skeleton height={"300px"}></Skeleton>
      <SkeletonText noOfLines={3} mb={2}></SkeletonText>
      <Skeleton height={"30px"}></Skeleton>
    </Box>
  );
};

export const HomePageCardLoaders = () => {
  return (
    <Grid
      justifyContent={"center"}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={6}
      p={4}
    >
      {new Array(16).fill(9).map((_, idx) => (
        <LoadingCards key={idx} />
      ))}
    </Grid>
  );
};

export default LoadingCards;
