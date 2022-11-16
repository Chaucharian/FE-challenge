import {
  Flex,
  Box,
  theme,
  Icon,
  Pressable,
  Text,
  Badge,
  Stack,
} from "native-base";
import React, { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export interface TagProps {
  text: string;
  leftIcon: React.ReactNode;
}

const Tag: FC<TagProps> = ({ text, leftIcon: LeftIcon }) => {
  return (
    <Flex
      backgroundColor="rgba(255, 255, 255, 0.1)"
      maxWidth="100px"
      p="4px"
      borderRadius="6px"
      alignItems="center"
    >
      <Stack direction="row" alignItems="center" space="6px">
        {LeftIcon}
        <Text fontWeight={theme.fontWeights.bold} color={theme.colors.white}>
          {text}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Tag;
