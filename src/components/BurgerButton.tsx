import React from "react";
import { NativeBaseProvider, Box, Flex, Text, Icon } from "native-base";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Gi3DHammer } from "react-icons/gi";

export default function BurgerButton(a: any) {
  return (
    <Flex position="fixed" bg="black" height="10px" width="100%">
      <Icon name="menu" as={Gi3DHammer} size="60px" color="#FFF" />
    </Flex>
  );
}
