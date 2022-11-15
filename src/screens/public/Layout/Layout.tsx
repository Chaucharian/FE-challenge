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
import Header from "./components/Header";

export default function Layout(a: any) {
  console.log("adasd", a);
  return (
    <Flex position="fixed" bg="black" height="10px" width="100%">
      <Header />
      <Outlet />
    </Flex>
  );
}
