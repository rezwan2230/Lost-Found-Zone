"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
  claimRequest: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post("/claim-request", claimRequest);

    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


export const getReceivedClaimRequest = async () => {
  try {
    const res = await axiosInstance.get(
      "/claim-request/received-claim-request"
    );

    return res.data;
  } catch (error: any) {
    throw new Error("Failed to fetch data");
  }
};
