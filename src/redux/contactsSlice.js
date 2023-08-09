import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

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
    incrementLike: (state, { payload: id }) => {
      state.items = state.items.map(todo => {
        if (todo.id === id) {
          return { ...todo, likes: todo.likes + 1 };
        } else {
          return todo;
        }
      });
    },

    decrementLike: (state, { payload: id }) => {
      state.items = state.items.map(todo => {
        if (todo.id === id) {
          if (todo.likes === 0) {
            return todo;
          } else {
            return { ...todo, likes: todo.likes - 1 };
          }
        } else {
          return todo;
        }
      });
    },

    editeToDo: (state, { payload: { id, query } }) => {
      state.items = state.items.map(todo => {
        if (todo.id === id) {
          return { ...todo, text: query };
        } else {
          return todo;
        }
      });
    },
  },
});

export const {
  addContact,
  deleteContact,
  incrementLike,
  decrementLike,
  editeToDo,
} = contactsSlice.actions;
export default contactsSlice.reducer;
export const selectContacts = state => state.contacts;
