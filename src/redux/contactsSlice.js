import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
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
export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactSlice.actions;
