import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertNote, deleteNote, getNotes } from "../../Localbase/notesDB";
export const getAllNotes = createAsyncThunk("notes/getAllNotes", getNotes);

const NoteSlice = createSlice({
  name: "notes",
  initialState: { data: [], loading: false, error: null, posting:false },
  reducers: {
    add_note: (state, action) => {
      let newNote = {
        id: action.payload.id,
        date: action.payload.date,
        title: action.payload.title,
        content: action.payload.content,
      };
      insertNote(newNote);
      return {...state, data: [ newNote,...state.data] };
    },
    delete_note: (state, action) => {
      deleteNote(action.payload.id);
      return {
        ...state,
        data: [...state.data.filter((note) => note.id !== action.payload.id)],
      };
    },
    posting_note:( state) => {
      return { ...state, posting:true}
    },
    cancelling_note:( state) => {
      return { ...state, posting:false}
    }
  },
  extraReducers: {
    [getAllNotes.pending]: (state) => {
      return { ...state, loading: true, error: null };
    },
    [getAllNotes.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [...action.payload],
        loading: false,
      };
    },
    [getAllNotes.rejected]: (state, action) => {
      return { ...state, error: action.error.message, loading: false };
    },
  },
});

export const { add_note, delete_note, posting_note, cancelling_note } = NoteSlice.actions;

export default NoteSlice.reducer;
