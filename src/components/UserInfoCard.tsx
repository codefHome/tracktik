import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { UserType } from '../types/types';
import mypic from "../assets/mypic.png";
interface UserInfoCardProps {
    userData: UserType | null;
  }

export default function UserInfoCard({ userData }: UserInfoCardProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div aria-describedby={id}  onClick={handleClick} className='cursor-pointer'>
      <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] overflow-hidden rounded-[100%] ">
      <img
      src={mypic}
      className=" w-full h-full bg-white"
    />
    </div>
      </div>
      <Popover
      className='flex justify-center items-center'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
        <div className="flex justify-center items-center flex-col gap-1 p-2 w-full ">
      <Typography sx={{fontSize:'14px'}}>{userData?.givenName}</Typography>
      <Typography sx={{fontSize:'14px'}}>{userData?.email}</Typography>
      </div>
      </Popover>
    </div>
  );
}