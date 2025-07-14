import { useMutation } from "@tanstack/react-query";
import { addClaimRequest } from "../services/ClaimRequest";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

export const useAddClaimRequest = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (postData) => await addClaimRequest(postData),
    onSuccess: () => {
      toast.success("Claim request create successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
