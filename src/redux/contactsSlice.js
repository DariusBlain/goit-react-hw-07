import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./contactsOps";
import { selectContacts, selectNameFilter } from "./selectors";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteContactThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContactThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
