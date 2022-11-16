import { Flex, Box, theme, Text, Stack } from "native-base";
import { FC } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Tag } from ".";
import Button from "./Button";

export interface ItemProps {
  title: string;
  description: string;
  isFavourite: boolean;
  tags: any;
  onClick: any;
}

export type Items = ItemProps[];

const Item: FC<ItemProps> = ({
  title,
  description,
  isFavourite,
  tags,
  onClick,
}) => {
  return (
    <Flex
      borderBottomColor="#463B5E"
      borderBottomWidth="1"
      mb={theme.space[0.5]}
    >
      <Flex justifyContent="space-between" direction="row">
        <Stack direction="column" space={theme.space["0.5"]}>
          <Text color={theme.colors.white} fontWeight={theme.fontWeights.bold}>
            {title}
          </Text>
          <Text color="blueGray.400">{description}</Text>
        </Stack>

        <Flex justifyContent="center">
          <Button onClick={onClick}>
            {isFavourite ? (
              <AiFillHeart size={20} color="#A2D1B1" />
            ) : (
              <AiOutlineHeart size={20} color="#A2D1B1" />
            )}
          </Button>
        </Flex>
      </Flex>

      <Box mb={theme.space[1]} mt={theme.space[0.5]}>
        {tags.map((text: string, index: number) => (
          <Tag
            key={index}
            text={text}
            leftIcon={
              <HiOutlineLocationMarker size={15} color={theme.colors.white} />
            }
          />
        ))}
      </Box>
    </Flex>
  );
};

export default Item;
