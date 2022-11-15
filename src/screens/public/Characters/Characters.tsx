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

export default function Characters() {
  console.log("CJA");

  return (
    <Flex>
      <Text color="blue.100" fontSize="30px">
        CHARACTERS
      </Text>
    </Flex>
  );
}
