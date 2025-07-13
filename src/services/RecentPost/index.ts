import envComfigue from "@/src/config/envConfigue";
import { delay } from "@/src/utils/delay";

export const getRecentPost = async () => {
  const fetchOption = {
    next : {
      tags: ['posts']
    }
  }
  const res = await fetch(
    `${envComfigue.baseApi}/items?sortBy=-createdAt&limit=9`, fetchOption
  );

  return res.json();
};
