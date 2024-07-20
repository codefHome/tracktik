import { InputAdornment, TextField } from "@mui/material";

import { ChangeEvent, ReactNode } from "react";
export interface SearchFieldProps {
  onChange: (event:ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeHolder:string;
  icon:ReactNode
}
const SearchField = ({ onChange, value,placeHolder,icon }: SearchFieldProps) => {
  return (
    <div>
      <TextField
  
        onChange={onChange}
        value={value}
        fullWidth
        placeholder={placeHolder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" role="img">
              {icon}
            </InputAdornment>
          ),
        }}
        sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: "20px",
              height:"40px",
              bgcolor:"white"
            },
          }}
      />
    </div>
  );
};

export default SearchField;
