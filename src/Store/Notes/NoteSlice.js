import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertNote, deleteNote, getNotes } from "../../Localbase/notesDB";
export const getAllNotes = createAsyncThunk("notes/getAllNotes", getNotes);

const NoteSlice = createSlice({
  name: "notes",
  initialState: { data: [], loading: false, error: null, posting: false },
  reducers: {
    add_note: (state, action) => {
      let newNote = {
        id: action.payload.id,
        date: action.payload.date,
        title: action.payload.title,
        content: action.payload.content,
      };
      insertNote(newNote);
      state.data.unshift(newNote);
    },
    delete_note: (state, action) => {
      deleteNote(action.payload.id);
      state.data = state.data.filter((note) => note.id !== action.payload.id);
    },
    posting_note: (state) => {
      state.posting = true;
    },
    cancelling_note: (state) => {
      state.posting = false;
    },
  },
  extraReducers: {
    [getAllNotes.pending]: (state) => {
      state.loading = true
    },

    [getAllNotes.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload

    },

    [getAllNotes.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  } 

});

export const { add_note, delete_note, posting_note, cancelling_note } =  NoteSlice.actions;

export default NoteSlice.reducer;
