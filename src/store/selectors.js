export const selectContacts = state => state.contacts.items;
export const selectContactFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
