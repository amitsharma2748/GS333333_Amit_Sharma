import { TextField } from "@mui/material";
import React from "react";

type CustomTextFieldType = {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  isInputError?:boolean;
  defaultValue?:string
};

const CustomNumberField = (customTextFieldProps: CustomTextFieldType) => {
  const { name,defaultValue, value, onChange, label, placeholder, fullWidth = true ,isInputError=false} =
    customTextFieldProps;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      name={name}
      value={value}
      type="number"
      onChange={handleChange}
      label={label}
      defaultValue={defaultValue}
      error={isInputError} 
      placeholder={placeholder}
      fullWidth={fullWidth}
      size="small"
      sx={{ padding: 0 }}
    />
  );
};

export default CustomNumberField;
