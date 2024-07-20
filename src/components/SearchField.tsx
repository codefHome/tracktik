import { InputAdornment, TextField } from "@mui/material";

import { ChangeEvent, ReactNode } from "react";
import { useAppSelector } from "store/hooks";
export interface SearchFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeHolder: string;
  icon: ReactNode;
}
const SearchField = ({
  onChange,
  value,
  placeHolder,
  icon,
}: SearchFieldProps) => {
  const { isDark } = useAppSelector((state) => state.tracking);
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
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            height: "40px",
            bgcolor: isDark ? "#111010" : "white",
            color: isDark ? "white" : "black",
          },
          "& .MuiInputBase-input:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 1000px ${
              isDark ? "#111010" : "white"
            } inset !important`,
            WebkitTextFillColor: `${isDark ? "white" : "#111010"} !important`,
            border: "none !important",
            background: "none",
            outline: "none",
            transition: "background-color 5000s ease-in-out 0s !important",
          },
        }}
      />
    </div>
  );
};

export default SearchField;
