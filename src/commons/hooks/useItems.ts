import { change, selectFavourites } from "@/app/store/favouriteSlice";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { People } from "@/commons/types/PeopleResponse";
import { Items } from "@/components/Item";
import { useMemo } from "react";

const useItems = (characters?: People[]) => {
  const { favourites } = useAppSelector(selectFavourites);
  const dispatch = useAppDispatch();
  const newItems = characters ?? favourites;

  const items: Items = useMemo<any>(
    () =>
      newItems.map((character) => ({
        title: character.name,
        description: `${character.gender} |${character.birth_year}`,
        tags: [character.homeworld],
        isFavourite: favourites.find(
          (favourite) => favourite.name === character.name
        ),
        onClick: () => dispatch(change(character)),
      })),
    [newItems]
  );

  return items;
};

export default useItems;
