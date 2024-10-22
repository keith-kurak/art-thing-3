import { useQuery, useQueryClient } from "@tanstack/react-query";
import { uniqBy } from "lodash";

const data = require("../api/cma_artwork.json");
const departments = uniqBy(
  data.data,
  (item: { department: string }) => item.department,
);

const departmentsWithTopWorks = departments.map((department) => ({
  department: department.department,
  works: data.data
    .filter((work: any) => department.department === work.department)
    .slice(0, 8),
}));

export const useDepartmentHighlightsQuery = function () {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({
    queryKey: [`departmentHighlights`],
    queryFn: async () => {
      return departmentsWithTopWorks;
    },
  });

  return query;
};
