import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../services";

export const getContactsJ = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const contacts = await API.getContactsJ();
      return contacts;
    } catch (error) {
      return error;
    }
  }
);