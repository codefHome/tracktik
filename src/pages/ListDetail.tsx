import { IconButton, LinearProgress, Typography } from "@mui/material";
import { useFetchSingleSiteQuery } from "../api/tracktikAPI";
import { useNavigate, useSearchParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import InfoField from "../components/InfoField";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from "store/hooks";

const ListDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("siteId") ?? "";
  const { data,isLoading,isSuccess } = useFetchSingleSiteQuery(id);
  const navigate = useNavigate()
  const handleBack = () =>{
    navigate(-1)
  }
  const{isDark}=useAppSelector(state =>state.tracking)
  return (
    <div className={`flex w-full p-2 mt-10 xl:p-20 ${ isDark ? "bg-[#202020]" : "bg-white"} xl:items-center xl:justify-center shadow-2xl`}>
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <span className="flex w-full xl:w-[1000px] justify-center xl:justify-start p-2 xl:p-0  ">
          <Typography
            sx={{ fontSize: "20px", fontWeight: 700 }}
            variant="subtitle1"
          >
           <IconButton onClick={handleBack}><ArrowBackIcon/></IconButton> Site Detail Information
          </Typography>
        </span>
        {isLoading && <div className="w-full h-[100vh] justify-center items-center">  <LinearProgress /></div>}
        {isSuccess && <>
            <div className="flex w-full xl:w-[1000px] justify-start gap-3 mt-10">
          <div className="w-[60px] h-[60px] overflow-hidden rounded-[50%] ">
            <img
              src={data?.client?.logo}
              alt="Client Logo"
              className="w-full h-full"
            />
          </div>
          <span className="flex flex-col pt-1">
            <Typography
              sx={{  fontStyle: "italic" }}
              variant="caption"
            >
              Client
            </Typography>
            <Typography>{data?.client?.givenName}</Typography>
          </span>
        </div>
        <div className={`flex flex-col xl:flex-row ${ isDark ? "bg-[#111010]" : "bg-white"} rounded-lg gap-8 shadow-2xl w-full mt-5 xl:w-[1000px] border-1 p-5`}>
          <div className="flex flex-col gap-2">
            <InfoField label="Site Name:" value={data?.title} />

            <ImageSlider images={data?.images ?? []} />
            <InfoField label="Site Address" />
            <span className="flex flex-col flex-wrap">
              <InfoField value={data?.address?.street} />
              <InfoField
                value={`${data?.address?.city},${data?.address?.state},${data?.address?.zipCode}`}
              />
              <InfoField value={data?.address?.country} />
            </span>
          </div>
          <div className="flex flex-col pt-7">
            <Typography sx={{ fontSize: "20px" }} variant="subtitle1">
              Main Contact
            </Typography>
            <InfoField
              label="Full Name:"
              value={`${data?.contacts?.main?.firstName} ${data?.contacts?.main?.lastName}`}
            />
            <InfoField label="Email:" value={data?.contacts?.main?.email} />
            <InfoField
              label="Phone:"
              value={data?.contacts?.main?.phoneNumber}
            />
            <InfoField label="Role:" value={data?.contacts?.main?.jobTitle} />
            <span className="flex flex-col  mt-10">
              <Typography variant="subtitle1">Address</Typography>
              <InfoField value={data?.contacts?.main?.address?.street} />
              <InfoField
                value={`${data?.contacts?.main?.address?.city},${data?.contacts?.main?.address?.state},${data?.contacts?.main?.address?.zipCode}`}
              />
              <InfoField value={data?.contacts?.main?.address?.country} />
            </span>
          </div>
        </div>
        </>}
      
      </div>
    </div>
  );
};

export default ListDetail;
