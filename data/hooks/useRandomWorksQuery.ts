import { useQuery, useQueryClient } from "@tanstack/react-query";
import { uniqBy } from "lodash";

const data = require("../api/cma_artwork.json");

// keeps it consistent within the same app load for a little less chaos
const departments = uniqBy(
  data.data,
  (item: { department: string }) => item.department,
);

const departmentsWithTopWorks = departments.map((department) => ({
  department: department.department,
  randomWork: data.data
    .filter((work: any) => department.department === work.department)
    .slice(0, 8)
    .sort(() => Math.random() - 0.5)[0],
}));

const randomDepartments = departmentsWithTopWorks.sort(
  () => Math.random() - 0.5,
);

export const useRandomWorksQuery = function (numWorks: number = 4) {
  // Queries
  const query = useQuery({
    queryKey: [`randomWorks`],
    queryFn: async () => {
      return randomDepartments.slice(0, numWorks);
    },
  });

  return query;
};
