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
import useGetCharacters from "./hooks/useGetCharacters";

export default function Characters() {
  console.log("CJA");

  useGetCharacters();
  return (
    <Flex>
      <Text color="blue.100" fontSize="30px">
        CHARACTERS
      </Text>
    </Flex>
  );
}
