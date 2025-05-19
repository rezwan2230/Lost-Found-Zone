import envComfigue from "@/src/config/envConfigue";
import { delay } from "@/src/utils/delay";

export const getRecentPost = async () => {
  const res = await fetch(
    `${envComfigue.baseApi}/items?sortBy=-createdAt&limit=9`
  );

  // await delay(5000)
  return res.json()
};
