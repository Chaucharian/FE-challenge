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

const Layout = (a: any) => {
  console.log("adasd", a);
  return (
    <Flex bg="#1E1E1E">
      <Header />
      <Outlet />
    </Flex>
  );
};

export default Layout;
