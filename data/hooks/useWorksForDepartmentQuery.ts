import { useQuery } from "@tanstack/react-query";

const data = require("../api/cma_artwork.json");

export const useWorksForDepartmentQuery = function (department: string) {
  // Queries
  const query = useQuery({
    queryKey: [`departments:${department}`],
    queryFn: async () => {
      return data.data.filter((item: any) => item.department === department);
    },
  });

  return query;
};
