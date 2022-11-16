import { People } from "@/commons/types/PeopleResponse";
import { ItemProps, Items } from "@/components/Item";
import { useMemo } from "react";

const useItems = (characters: People[]) => {
  const items: Items = useMemo<any>(
    () =>
      characters.map((character) => ({
        title: character.name,
        description: `${character.gender} |${character.birth_year}`,
        tags: [character.homeworld],
        onClick: () => console.log("EEAAA"),
      })),
    [characters]
  );

  return items;
};

export default useItems;
