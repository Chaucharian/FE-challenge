import { Flex, Box, theme, Icon, Pressable, Text, Badge } from "native-base";
import React, { FC } from "react";

import { Gi3DHammer } from "react-icons/gi";

export interface ItemProps {
  title: string;
  description: string;
  tags: any;
  onClick: any;
}

export type Items = ItemProps[];

const Item: FC<ItemProps> = ({ title, description, tags, onClick }) => {
  return (
    <Flex>
      <Flex justifyContent="space-between">
        <Box>
          <Text color={theme.colors.white} fontWeight={theme.fontWeights.bold}>
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>

        <Icon name="menu" as={Gi3DHammer} size={60} color="red" />
      </Flex>

      <Flex>
        {tags.map((tagText: any) => (
          <div onClick={onClick}>
            <Badge>{tagText}</Badge>
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default Item;
