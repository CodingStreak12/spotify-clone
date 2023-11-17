import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playingSong: {},
  isPlaying: false,
};
const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    playSong(state, action) {
      if (state.isPlaying) {
        state.playingSong.mp3.pause();
        state.playingSong.mp3.currentTime = 0;
      }

      state.playingSong = action.payload;
      state.isPlaying = true;
      state.playingSong.mp3.play();
    },
    pauseSong(state, action) {
      state.playingSong = action.payload;
      state.isPlaying = false;
      state.playingSong.mp3.pause();
    },
  },
});

export default songSlice.reducer;
export const { playSong, pauseSong } = songSlice.actions;
