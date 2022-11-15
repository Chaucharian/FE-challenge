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
import { BurgerButton } from "@/components";

export default function Header(a: any) {
  return (
    <Flex position="fixed" bg="black" height="10px" width="100%">
      <BurgerButton />
    </Flex>
  );
}
