import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./contactsAction";
import { getContactsJ } from "./contactsOperations";

const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],

  [deleteContact]: (state, { payload }) => {
    const newContactsArray = state.filter(({ id }) => id !== payload);
    return newContactsArray;
  },

  [getContactsJ.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const isLoader = createReducer(false, {
  [getContactsJ.pending]: () => true,
  [getContactsJ.fulfilled]: () => false,
  [getContactsJ.rejected]: () => false,
});

const error = createReducer(null, {
  [getContactsJ.rejected]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  isLoader,
  error,
});
export default contactsReducer;
