"use server";
import envConfigue from "@/src/config/envConfigue";
import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (formData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("posts");
    return data;
  } catch (error) {
    throw new Error("Failed to create post");
  }
};


export const getPost = async (postId: string) => {
  let fetchOption = {};
  fetchOption = {
    cache: "no-store",
  };
  const res = await fetch(
    `${envConfigue.baseApi}/items/${postId}`,
    fetchOption
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
