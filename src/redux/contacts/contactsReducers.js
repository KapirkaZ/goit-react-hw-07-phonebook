import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contactsActions";

// import errorMessage from "../../components/Notification/Notification";

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = actions;

// const addContacts = (state, action) => {
//   const names = state.map((item) => item.name.toLowerCase());
//   const isNotUniqueContact = names.includes(
//     action.payload.contact.name.toLowerCase().trim()
//   );

//   if (isNotUniqueContact) {
//     errorMessage(action.payload.contact.name);
//     return state;
//   } else {
//     return [...state, action.payload.contact];
//   }
// };

// const removeContacts = (state, action) => {
//   return state.filter(({ id }) => id !== action.payload);
// };

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const error = createReducer(false, {
  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: () => true,
  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => true,
  [fetchContactRequest]: () => false,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => true,
});
export default combineReducers({
  items,
  filter,
  loading,
  error,
});
