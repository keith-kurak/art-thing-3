import { useQuery } from "@tanstack/react-query";
import { uniqBy } from "lodash";

const data = require("../api/cma_artwork.json");
const departments = uniqBy(
  data.data,
  (item: { department: string; images: any }) => item.department,
);

export const useExhibitsQuery = function () {
  // Queries
  const query = useQuery({
    queryKey: [`departments`],
    queryFn: async () => {
      return departments.map((item) => ({
        department: item.department,
        imageUrl: item.images.web.url,
      }));
    },
  });

  return query;
};
