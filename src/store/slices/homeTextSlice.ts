import { createSlice } from '@reduxjs/toolkit';

export const homeTextSlice = createSlice({
  name: 'homeText',
  initialState: {
    text: 'For over 17 Years, Fetch! Pet Care Has been a trusted partner in keeping pets healthy and happy!',
  },
  reducers: {
    setHomeText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setHomeText } = homeTextSlice.actions;