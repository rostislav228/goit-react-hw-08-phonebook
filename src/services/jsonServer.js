import axios from "axios";

export const getContactsJ = async () => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    return error;
  }
};

export const addContactJ = async (data) => {
  try {
    const response = await axios.post("/contacts", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteContactJ = async (data) => {
  try {
    console.log(data);
    const response = await axios.delete(`/contacts/${data}`);
    return response;
  } catch (error) {
    return error;
  }
};
