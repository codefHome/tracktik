import { InputAdornment, TextField } from "@mui/material";

import { ChangeEvent, ReactNode } from "react";
import { useAppSelector } from "store/hooks";
export interface SearchFieldProps {
  onChange: (event:ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeHolder:string;
  icon:ReactNode
}
const SearchField = ({ onChange, value,placeHolder,icon }: SearchFieldProps) => {
  const{isDark}= useAppSelector(state => state.tracking)
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
              bgcolor:isDark ? 'black' :'white',
              color:isDark ? 'white' :'black',

            },
           
          }}
      />
    </div>
  );
};

export default SearchField;
