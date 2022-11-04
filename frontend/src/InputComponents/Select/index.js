import { MenuItem, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

export default function SelectWrapper({ name, options, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handelChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    name,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handelChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
