import { useQuery } from "@tanstack/react-query";

const data = require("../api/cma_artwork.json");

export const useWorkByIdQuery = function (id: string) {
  // Queries
  const query = useQuery({
    queryKey: [`works:${id}`],
    queryFn: async () => {
      return data.data.find((item: any) => String(item.id) === id)
    },
  });

  return query;
};
