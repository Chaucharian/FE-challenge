import React from "react";
import { NativeBaseProvider, Box, Flex, Text } from "native-base";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

const Favourites = () => {
  console.log("FAv");
  return (
    <Flex height="50px" bg="blue" width="40px">
      <Text>FAVOURITES</Text>
    </Flex>
  );
};

export default Favourites;
