import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact");
const deleteContact = createAction("contacts/deleteContact");
const setFilter = createAction("contacts/setFilter");

export { addContact, deleteContact, setFilter };
