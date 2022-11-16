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
import { useGetCharacters, useItems } from "./hooks";
import { List } from "@/components";
import { useSelector } from "react-redux";

const Characters = () => {
  const { characters, loading } = useGetCharacters();
  const items = useItems(characters);

  return (
    <Flex overflow="scroll">
      <List items={items} loading={loading} />
    </Flex>
  );
};
export default Characters;
