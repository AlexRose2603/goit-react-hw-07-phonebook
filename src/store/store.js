import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './Filters/slice';
import { contactsReducer } from './Contacts/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
