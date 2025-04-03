import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';

export const selectNameFilter = state => state.filters.name;
const initialState = {
  name: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        // state.name = action.payload;
      });
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
