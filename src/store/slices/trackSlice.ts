import { createSlice } from '@reduxjs/toolkit';

interface TrackSliceType{
    isDark:boolean;
}
const initialState: TrackSliceType = {
 isDark:false
 
};

const tracktikSlice = createSlice({
  name: 'tracktik',
  initialState,
  reducers: {
    setIsDark(state){
      state.isDark = !state.isDark
    }
   
  },
});

export const {
  setIsDark

} = tracktikSlice.actions;

export default tracktikSlice.reducer;
