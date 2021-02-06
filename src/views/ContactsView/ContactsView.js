import { useEffect } from "react";
import Section from "../../components/Section/Section.js";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter.js";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  addContact,
  setFilter,
} from "../../redux/contacts/contactsAction";
import * as API from "../../services";
import { getContactsJ } from "../../redux/contacts/contactsOperations";
import {
  getContacts,
  getFilter,
  getLoader,
  getError,
} from "../../redux/contacts/contactsSelectors";

function ContactsView() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoader = useSelector(getLoader);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const addContacts = (contact) => dispatch(addContact(contact));
  const contactDelete = (id) => dispatch(deleteContact(id));
  const setFilterApp = (data) => dispatch(setFilter(data));

  if (error) {
    alert(error);
  }

  useEffect(() => {
    dispatch(getContactsJ());
  }, [dispatch]);

  const changeHandler = (e) => {
    setFilterApp(e.target.value);
  };

  const deleteContactbyId = async (id) => {
    const response = await API.deleteContactJ(id);
    if (response.status !== 200) {
      return alert("error");
    }
    contactDelete(id);
  };

  const addContactApp = async (contact) => {
    const newName = contact.name;
    const names = contacts.map((contact) => contact.name.toLowerCase());
    if (names.includes(newName.toLowerCase().trim())) {
      alert(`${newName} is already in contact list`);
      return;
    }

    const response = await API.addContactJ(contact);
    if (response.status !== 201) {
      return alert("error");
    }
    addContacts(contact);
  };

  const filterContactsByName = () => {
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={addContactApp} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={changeHandler} />
        {isLoader && <p>loading </p>}
        {!isLoader && (
          <ContactList
            contacts={filterContactsByName()}
            onDelete={deleteContactbyId}
          />
        )}
      </Section>
    </>
  );
}
export default ContactsView;
