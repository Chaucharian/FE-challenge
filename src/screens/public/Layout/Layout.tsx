import React from "react";
import { NativeBaseProvider, Box, Flex, Text, theme } from "native-base";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <Flex bg="#1E1E1E">
      <Header />
      <Flex p={theme.space["0.5"]} mt="40px">
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
