import { Database } from '@/data/api/database';

export async function GET(request : Request, { id }: Record<string, string>) {
  // read the favorites status from our database
  const database = new Database();
  const favStatus = await database.getFavoriteStatus(id);
  // make a json response
  return Response.json(favStatus);
}

export async function POST(request : Request, { id }: Record<string, string>) {
  // read the body for the payload
  const body = await request.json();
  const status = body.status;
  // write the updated status to our database
  const database = new Database();
  await database.setFavoriteStatus(id, status);
  // make a json response
  return Response.json(status);
}