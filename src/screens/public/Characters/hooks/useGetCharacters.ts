import { useQuery } from "@tanstack/react-query";

export const PEOPLE_KEY = "/people";

const useGetCharacters = () => {
  useQuery([PEOPLE_KEY], {
    enabled: true,
  });
};

export default useGetCharacters;
