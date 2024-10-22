/* used by Expo Router API Routes */

import storage from "node-persist";
import { keys } from "lodash";
import shortHash from "short-hash";

const artwork = require("@/data/api/cma_artwork.json");

const DEFAULT_USER_ID = "default";

class Database {
  userId: string;

  constructor(userId?: string | undefined | null) {
    this.userId = userId || DEFAULT_USER_ID;
  }

  async initIfNeeded() {
    await storage.init({
      dir: `./server-storage/${this.userId}`,
      expiredInterval: 0,
    });
  }

  async login(email: string, password: string) {
    await this.initIfNeeded();
    const userId = shortHash(email + password);
    return userId;
  }

  async getFavorites() {
    await this.initIfNeeded();
    const favs = (await storage.getItem("favs")) || {};
    return keys(favs)
      .filter((favsKey) => favs[favsKey])
      .map((id) => ({
        id,
        image: artwork.data.find((item: any) => item.id === id)?.images?.web
          ?.url,
      }));
  }

  async getFavoriteStatus(id: string) {
    await this.initIfNeeded();
    const favs = (await storage.getItem("favs")) || {};
    return !!favs[id];
  }

  async setFavoriteStatus(id: string, fav: boolean) {
    await this.initIfNeeded();
    const favs = (await storage.getItem("favs")) || {};
    favs[id] = fav;
    await storage.setItem("favs", favs);
  }
}

export { Database };
