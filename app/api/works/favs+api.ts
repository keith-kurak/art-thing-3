import { Database } from "@/data/api/database";

export async function GET(request: Request) {
  const database = new Database(request.headers.get("authToken"));
  const favs = await database.getFavorites();
  return Response.json(favs);
}
