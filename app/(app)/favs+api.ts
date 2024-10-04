import { Database } from '@/data/api/database';

export async function GET() {
  const database = new Database();
  const favs = await database.getFavorites();
  return Response.json(favs);
}