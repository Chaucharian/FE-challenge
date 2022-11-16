import { People, PeopleResponse, PlanetsResponse } from "@/commons/types";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo, useState } from "react";

export const PEOPLE_KEY = "people";

export const useGetCharacters = () => {
  const { data: peopleResponse } = useQuery<
    PeopleResponse,
    unknown,
    PeopleResponse,
    [string]
  >([PEOPLE_KEY]);
  const people = peopleResponse?.results ?? [];
  const planetsResponse: any = useQueries({
    queries: people.map((people) => {
      return {
        queryKey: [people.homeworld.split("/api")[1]],
      };
    }),
  });
  const loading = planetsResponse.every((response: any) => response.isLoading);

  const characters = useMemo(
    () =>
      people.map((character, index) => ({
        ...character,
        homeworld: planetsResponse[index].data?.name,
      })),
    [people, planetsResponse]
  );

  return { loading, characters };
};

export default useGetCharacters;
