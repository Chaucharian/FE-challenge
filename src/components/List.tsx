import { FC } from "react";
import { Flex, Spinner } from "native-base";
import Item, { ItemProps } from "./Item";

export interface ListProps {
  items: ItemProps[];
  loading?: boolean;
}

const List: FC<ListProps> = ({ items, loading }) => {
  return loading ? (
    <Flex justifyContent="center" alignItems="center">
      <Spinner size={40} color="blueGray.400" />
    </Flex>
  ) : (
    <Flex direction="column">
      {items.map((data: ItemProps) => (
        <Item {...data} key={data.title} />
      ))}
    </Flex>
  );
};

export default List;
