export const getContacts = (state) => state.phonebook.contacts;
export const getFilter = (state) => state.phonebook.filter;
// добавленно
export const getLoader = (state) => state.phonebook.isLoader;
export const getError = (state) => state.phonebook.error;
