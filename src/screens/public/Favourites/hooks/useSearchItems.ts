import { ItemProps, Items } from "@/components/Item";
import { useEffect, useState } from "react";

const useSearchItems = (
  initialItems: Items,
  searchBy: keyof ItemProps = "title"
) => {
  const [items, setItems] = useState(initialItems);

  const onSearch = (criteria: string) => {
    const newItems = items.reduce<any>((prev) => {
      const key: keyof ItemProps = searchBy;

      const match = prev.find(
        (item: any) =>
          criteria &&
          item[key].toLowerCase().trim().includes(criteria.toLowerCase().trim())
      );

      if (match) {
        return [match];
      } else {
        return initialItems;
      }
    }, items);

    setItems(newItems);
  };

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  return { onSearch, items };
};

export default useSearchItems;
