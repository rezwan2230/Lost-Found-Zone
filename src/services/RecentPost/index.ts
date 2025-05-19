import envComfigue from "@/src/config/envConfigue";
import { delay } from "@/src/utils/delay";

export const getRecentPost = async () => {
  const res = await fetch(
    `${envComfigue.baseApi}/items?sortBy=-createdAt&limit=9`
  );

  return res.json();
};
