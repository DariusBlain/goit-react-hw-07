import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.loading = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.error = action.payload;
    },
    fetchData: (state, action) => {
      state.items = action.payload;
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const contactReducer = contactSlice.reducer;
export const {
  addContact,
  deleteContact,
  setErrorStatus,
  setLoadingStatus,
  fetchData,
} = contactSlice.actions;
