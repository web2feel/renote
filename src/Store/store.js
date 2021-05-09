import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./Notes/NoteSlice";
export default configureStore({
  reducer: {
    notes: NoteReducer,
  },
});
