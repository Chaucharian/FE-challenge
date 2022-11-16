import React, { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Flex,
  Text,
  Icon,
  Pressable,
} from "native-base";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

import Button from "./Button";
import { useOpen } from "@/commons/hooks";

const BurgerButton = ({ open: controlledOpen, onClick }: any) => {
  const { open, setOpen } = useOpen();

  const click = () => {
    setOpen(!open);
    onClick();
  };

  return (
    <Button onClick={click}>
      <Flex justifyContent="center">
        {controlledOpen ?? open ? (
          <GiHamburgerMenu color="white" size="25px" />
        ) : (
          <GrClose color="#FFF" size="25px" />
        )}
      </Flex>
    </Button>
  );
};

export default BurgerButton;
