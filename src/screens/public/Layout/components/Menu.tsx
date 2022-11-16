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

export default function Menu({ open }: any) {
  return (
    <Flex
      position="static"
      zIndex="1"
      height="100vh"
      width="100%"
      display={open ? "block" : "none"}
    >
      <ul>
        <li>CHARACTERS</li>
        <li>FAVOURITES</li>
      </ul>
    </Flex>
  );
}
