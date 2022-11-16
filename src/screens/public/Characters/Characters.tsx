import { Flex } from "native-base";
import { useGetCharacters } from "./hooks";
import { List } from "@/components";

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
