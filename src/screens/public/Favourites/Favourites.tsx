import React from "react";
import { NativeBaseProvider, Box, Flex, Text } from "native-base";
import { Route } from "@/commons/types";

export const route: Route = { name: "Favourites", path: "/favourites" };

const Favourites = () => {
  console.log("FAv");
  return (
    <Flex height="50px" bg="blue" width="40px">
      <Text>FAVOURITES</Text>
    </Flex>
  );
};

export default Favourites;
