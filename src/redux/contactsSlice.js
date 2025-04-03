import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push({ id: nanoid(), ...action.payload });
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) {
          state.items = action.payload;
        } else {
          state.items = []; // Якщо це не масив, ініціалізуємо як порожній масив
        }
        // state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        // state.items.push(action.payload);
        state.items = state.items
          ? [...state.items, action.payload]
          : [action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
