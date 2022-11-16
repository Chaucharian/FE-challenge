import React, { FC } from "react";
import { NativeBaseProvider, Box, Flex, Text, theme } from "native-base";
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
import { useOpen } from "@/commons/hooks";
import Menu from "./Menu";
import { routes } from "@/screens/public";

const Header: FC<any> = () => {
  const { open, setOpen } = useOpen(false);
  const location = useLocation();
  const title = routes.find((route) => route.path === location.pathname)?.name;

  const openMenu = () => setOpen(!open);
  return (
    <Box
      position="fixed"
      zIndex="1"
      width="100%"
      p={theme.space["0.5"]}
      bg="#1E1E1E"
    >
      {/* <Menu open={open} /> */}
      <Flex justifyContent="space-between" direction="row">
        <BurgerButton onClick={openMenu} open={open} />
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Text
            color={theme.colors.white}
            fontWeight={theme.fontWeights.bold}
            fontSize="15px"
          >
            {title}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
