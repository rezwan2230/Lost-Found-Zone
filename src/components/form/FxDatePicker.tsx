import { IInput } from "@/src/types";
import { DatePicker } from "@heroui/date-picker";
import { Controller } from "react-hook-form";

interface IProps extends IInput {}

const FxDatePicker = ({ label, name }: IProps) => {

  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker className="max-w-[284px]" label={label} {...fields} />
      )}
    />
  );
};

export default FxDatePicker;
