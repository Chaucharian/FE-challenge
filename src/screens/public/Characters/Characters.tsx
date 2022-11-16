import React from "react";
import { NativeBaseProvider, Box, Flex, Text } from "native-base";
import {
  Routes,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useGetCharacters } from "./hooks";
import { List } from "@/components";
import { useSelector } from "react-redux";
import { Route } from "@/commons/types";
import { useItems } from "@/commons/hooks";

export const route: Route = { name: "Characters", path: "/" };

const Characters = () => {
  const { characters, loading } = useGetCharacters();
  const items = useItems(characters);

  return (
    <Flex height="100vh">
      <List items={items} loading={loading} />
    </Flex>
  );
};
export default Characters;
