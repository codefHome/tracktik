
import Carousel from 'react-material-ui-carousel';
import { Paper, } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';


interface ImageSliderProps{
    images:string[]
}
interface ItemProps{
    item:string;
    key:number
}
const ImageSlider = ({images}:ImageSliderProps) => {
  return (
    <Carousel className='w-full xl:w-[550px] '
      NextIcon={<ArrowForwardIos />}
      PrevIcon={<ArrowBackIos />}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
          color: '#000',
         
        }
      }}
      indicators={false}
    >
      {images?.map((item,i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({item}:ItemProps) => {
  return (
    <Paper>
      <img src={item} alt='site views' className='w-full xl:w-[550px] h-[300px] object-cover' />
    </Paper>
  );
};

export default ImageSlider;
