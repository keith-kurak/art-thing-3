import { useQuery } from "@tanstack/react-query";
import { LocalDatabase } from '@/data/api/local-database';
import { useAuth } from "./useAuth";

export const useFavsQuery = function() {
  const { authToken } = useAuth();
  // Queries
  const query = useQuery({
    queryKey: [`favs`],
    queryFn: async () => {
      if (process.env.EXPO_PUBLIC_USE_LOCAL_DATA) {
        return await fetchFromLocal()
      }
      return await fetchFromServer(authToken)
    },
  });

  return query;
}

async function fetchFromServer(authToken: string ) {
  const response = await fetch(`/api/works/favs`, {
    method: 'GET',
    headers: {
      authToken
    },
  });
  return await response.json();
}

async function fetchFromLocal() {
  const db = new LocalDatabase();
  return await db.getFavorites();
}