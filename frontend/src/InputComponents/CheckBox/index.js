import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

export default function CheckBoxWrapper({
  name,
  label,
  legend,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handelChange = (e) => {
    const { checked } = e.target;
    setFieldValue(name, checked);
  };
  const configCheckBox = {
    ...field,
    onChange: handelChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckBox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
}
