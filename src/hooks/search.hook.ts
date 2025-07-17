import { useMutation } from "@tanstack/react-query";
import { searchItems } from "../services/Search";

const useSearchItems = () => {
  return useMutation({
    mutationKey: ["SEARCH_ITEMS"],
    mutationFn: async (searchTerm: string) => await searchItems(searchTerm),
  });
};
