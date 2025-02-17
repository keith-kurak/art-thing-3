import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LocalDatabase } from "@/data/api/local-database";
import { useAuth } from "./useAuth";

export const useFavStatusMutation = function () {
  const queryClient = useQueryClient();
  const { authToken } = useAuth();

  // Queries
  const query = useMutation({
    mutationFn: async (favStatus: { workId: string; status: boolean }) => {
      const { workId, status } = favStatus;
      if (process.env.EXPO_PUBLIC_USE_LOCAL_DATA) {
        return await postToLocal(workId, status);
      }
      return await postToServer(authToken, workId, status);
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        [`works:fav:${variables.workId}`],
        variables.status
      );
      queryClient.invalidateQueries({ queryKey: ["favs"] });
    },
  });

  return query;
};

async function postToServer(authToken: string, id: string, status: boolean) {
  const response = await fetch(`/api/works/${id}/fav`, {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
      authToken,
    },
    cache: "default",
    body: JSON.stringify({ status }),
  });
  return await response.json();
}

async function postToLocal(id: string, status: boolean) {
  const db = new LocalDatabase();
  return await db.setFavoriteStatus(id, status);
}
