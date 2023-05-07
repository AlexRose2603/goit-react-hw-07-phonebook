import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'store/operations';

export const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsActions = [fetchContacts, addContact, deleteContact];
const getActions = type =>
  isAnyOf(...contactsActions.map(action => action[type]));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          state => state.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(getActions('pending'), handlePending)
      .addMatcher(getActions('rejected'), handleRejected)
      .addMatcher(getActions('fulfilled'), handleFulfilled),
});

export const contactsReducer = contactsSlice.reducer;
