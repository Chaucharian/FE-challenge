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

const Header: FC<any> = () => {
  const { open, setOpen } = useOpen(false);

  const openMenu = () => setOpen(!open);
  return (
    <Box position="static" bg="red" height="80px" width="100%">
      <Flex
        width="100%"
        justifyContent="space-between"
        direction="row"
        p={theme.space["0.5"]}
      >
        <Menu open={open} />
        <BurgerButton onClick={openMenu} open={open} />
        <Text color="blue.100" fontSize="30px">
          CHARACTERS
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
