import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { IButtonProps } from "types/types";
import { useAppSelector } from "store/hooks";


const VisiblityButton = ({ icon, label, handleClick }: IButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const{isDark}= useAppSelector(state => state.tracking)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "rotate(15deg)" : "rotate(0deg)",
        background: isHovered ? "tranparent" : "",
        padding: "5px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {icon}
      <Typography variant="subtitle1" sx={{color: isDark ? 'white' : 'black'}}>
        {label}
      </Typography>
    </Box>
  );
};

export default VisiblityButton;
