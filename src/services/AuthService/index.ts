"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);
    if (data.success) {
      (await cookies()).set("access-token", data?.data?.accessToken),
        (await cookies()).set("refresh-token", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data.success) {
      (await cookies()).set("access-token", data?.data?.accessToken),
        (await cookies()).set("refresh-token", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = async () => {
  (await cookies()).delete("access-token");
  (await cookies()).delete("refresh-token");
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("access-token")?.value;

  let decodedToken = null;
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePhoto: decodedToken.profilePhoto,
    };
  }
  return decodedToken;
};

export const getNewAccessToken = async () => {
  try {
    const refrestToken = (await cookies()).get("refresh-token")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookies: `refreshToken=${refrestToken}`,
      },
    });

    return res.data; 
  } catch (error: any) {
    throw new Error("Failed to get new access token");
  }
};
