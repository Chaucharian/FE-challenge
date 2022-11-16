import { Flex, Input, Stack, Text, theme } from "native-base";
import { Route } from "@/commons/types";
import { List } from "@/components";
import { useItems } from "@/commons/hooks";
import { BsSearch } from "react-icons/bs";
import { useSearchItems } from "./hooks";

export const route: Route = { name: "Favourites", path: "/favourites" };

const Favourites = () => {
  const favourites = useItems();
  const { onSearch, items } = useSearchItems(favourites);

  return (
    <Flex mt="42px">
      <Stack direction="column" space="12px" mb="50px">
        <Text color={theme.colors.white}>Search a favourite</Text>
        <Input
          pt="14px"
          pb="18px"
          borderRadius="16px"
          borderColor={theme.colors.white}
          color={theme.colors.white}
          onChangeText={onSearch}
          InputRightElement={
            <Flex mr="12px">
              <BsSearch name="search" size={20} color={theme.colors.white} />
            </Flex>
          }
          placeholder="Type something..."
        />
      </Stack>

      <List items={items} />
    </Flex>
  );
};

export default Favourites;
