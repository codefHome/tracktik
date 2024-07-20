import { Typography } from "@mui/material"
import UserInfoCard from "./UserInfoCard"
import { useFetchUserQuery } from "../api/tracktikAPI";


const Header = () => {
    const { data: user } = useFetchUserQuery(null);
  return (
    <div className="flex justify-between w-full p-1 md:p-5 ">
    <Typography sx={{ fontSize: "25px", fontWeight: 700 }}>
      Tracktick
    </Typography>
    <UserInfoCard userData={user ?? null} />
  
  </div>
  )
}

export default Header