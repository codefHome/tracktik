import { Typography } from "@mui/material"

interface InfoFieldProps{
    label?:string;
    value?:string | undefined;
}
const InfoField = ({label,value}:InfoFieldProps) => {
  return (
   <Typography variant="subtitle1">{label}&nbsp;<Typography variant='caption' component='text'>{value}</Typography></Typography>
  )
}

export default InfoField