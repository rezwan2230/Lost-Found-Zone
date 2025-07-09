import { IInput } from "@/src/types";
import { Select, SelectItem } from "@heroui/select";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

const FxSelect = ({ options, name, label, variant = "bordered" }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px]"
      variant={variant}
      label={label}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FxSelect;
