import { configureStore } from "@reduxjs/toolkit";
import SongSlice from "./SongSlice";
const store = configureStore({
  reducer: {
    songs: SongSlice,
  },
});

export default store;
