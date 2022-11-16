import React from "react";
import { NativeBaseProvider, Box, Flex, Text, theme } from "native-base";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useOpen } from "@/commons/hooks";
import Menu from "./components/Menu";

const Layout = () => {
  return (
    <Flex bg="#1E1E1E">
      <Header />
      <Flex
        p={theme.space["1"]}
        mr={{ lg: theme.space[16] }}
        ml={{ lg: theme.space[16] }}
        mt="40px"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
