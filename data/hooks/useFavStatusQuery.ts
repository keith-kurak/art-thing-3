import { useQuery } from "@tanstack/react-query";
import { LocalDatabase } from '@/data/api/local-database';
import { useAuth } from "./useAuth";

const data = require("../api/cma_artwork.json");

export const useFavStatusQuery = function(id: string) {
  const { authToken } = useAuth();
  // Queries
  const query = useQuery({
    queryKey: [`works:fav:${id}`],
    queryFn: async () => {
      if (process.env.EXPO_PUBLIC_USE_LOCAL_DATA) {
         return await fetchFromLocal(id)
      }
      return await fetchFromServer(authToken, id)
    },
  });

  return query;
}

async function fetchFromServer(authToken: string, id: string) {
  const response = await fetch(`/api/works/${id}/fav`, {
    method: 'GET',
    headers: {
      authToken,
    },
  });
  return await response.json();
}

async function fetchFromLocal(id: string) {
  const db = new LocalDatabase();
  return await db.getFavoriteStatus(id);
}