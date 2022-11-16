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

const Error = () => {
  return (
    <Flex>
      <Text color="blue.100" fontSize="30px">
        Error path not found
      </Text>
    </Flex>
  );
};

export default Error;
