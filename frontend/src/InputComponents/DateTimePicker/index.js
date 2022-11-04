import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function DateTimeWrapper({ name, ...otherProps }) {
  const [field, meta] = useField(name);

  const configDateTime = {
    ...field,
    name,
    ...otherProps,
    type: "datetime-local",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTime.error = true;
    configDateTime.helperText = meta.error;
  }

  return <TextField {...configDateTime} />;
}
