import { Typography } from "@mui/material";
import fallback from "../assets/fallback.jpg";
import { useAppSelector } from "store/hooks";
export interface ListCardProps {
  imageUrl: string;
  siteName: string;
  siteAddress: string;
  siteContact: string;
  handleNavigation: (value: string) => void;
  id: string;
}
const ListCard = ({
  imageUrl,
  siteName,
  siteAddress,
  siteContact,
  id,
  handleNavigation,
}: ListCardProps) => {
  const{isDark}=useAppSelector(state =>state.tracking)
  return (
    <div
      onClick={() => handleNavigation(id)}
      className={`flex flex-col gap-1 mb-10 w-full shadow-lg p-1 ${ isDark ? "bg-[#292828]" : "bg-white"} xl:w-[350px] h-auto xl:h-[360px] cursor-pointer`}
    >
      <img
        src={imageUrl ?? fallback}
        className={`rounded-lg w-full xl:w-[350px] h-[200px] ${ isDark ? "bg-[#111010]" : "bg-white"} p-1 pl-4 object-cover`}
      />
      <div className="flex flex-col px-5">
        <Typography variant="subtitle1">
          Site Name:
          <Typography variant="caption" component="text">
            {siteName}
          </Typography>
        </Typography>
        <Typography variant="subtitle1">
          Site Address: <Typography component="text">{siteAddress}</Typography>
        </Typography>
        <Typography variant="subtitle1">
          Contact: <Typography component="text">{siteContact}</Typography>
        </Typography>
      </div>
    </div>
  );
};

export default ListCard;
