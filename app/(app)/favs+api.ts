import { Database } from '@/data/api/database';

export async function GET() {
  const database = new Database();
  const favs = await database.getFavorites();
  console.log(favs)
  return Response.json(favs);
}