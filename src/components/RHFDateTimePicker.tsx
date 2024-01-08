import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export function RHFDateTimePicker<T extends FieldValues>({
  name,
  label,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ...field } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker label={label} {...field} />
        </LocalizationProvider>
      )}
    />
  );
}
