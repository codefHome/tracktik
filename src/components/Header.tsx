import { Typography } from "@mui/material"
import UserInfoCard from "./UserInfoCard"
import { useFetchUserQuery } from "../api/tracktikAPI";
import VisiblityButton from "./VisiblityButton";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setIsDark } from "store/slices/trackSlice";
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Header = () => {
    const { data: user } = useFetchUserQuery(null);
    const dispatch = useAppDispatch()
    const handleDarkMode = () => {
        dispatch(setIsDark());
      };
      const{isDark}=useAppSelector(state =>state.tracking)
  return (
    <div className={`flex justify-between w-full p-1 md:p-5 ${ isDark ? "bg-[#474747]" : "bg-[#D6F3E7]"}`}>
    <Typography variant="subtitle2" >
      Tracktick
    </Typography>
    <VisiblityButton
                handleClick={handleDarkMode}
                label={isDark ? "light" : "Dark"}
                icon={<Brightness4Icon />}
              />
    <UserInfoCard userData={user ?? null} />
  
  </div>
  )
}

export default Header