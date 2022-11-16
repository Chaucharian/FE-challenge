import React, { FC } from "react";
import {
  NativeBaseProvider,
  Box,
  Flex,
  Text,
  Icon,
  Stack,
  theme,
  Spinner,
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
import { Gi3DHammer } from "react-icons/gi";
import Item, { ItemProps } from "./Item";

export interface ListProps {
  items: ItemProps[];
  loading: boolean;
}

const List: FC<ListProps> = ({ items, loading }) => {
  console.log(loading);
  return loading ? (
    <Flex justifyContent="center" alignItems="center">
      <Spinner size={40} color="blueGray.400" />
    </Flex>
  ) : (
    <Flex direction="column">
      {items.map((data: ItemProps) => (
        <Item {...data} />
      ))}
    </Flex>
  );
};

export default List;
