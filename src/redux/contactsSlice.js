import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteContact: (state, { payload: id }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export default contactsSlice.reducer;
