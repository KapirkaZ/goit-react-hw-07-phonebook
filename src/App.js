// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
import contactsOperations from "./redux/contacts/contactsOperations";
import contactsSelectors from "./redux/contacts/contactsSelectors";
import { connect } from "react-redux";
import { useEffect } from "react";

const App = ({ fetchContacts }) => {
  // eslint-disable-next-line
  useEffect(() => fetchContacts(), []);

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>

        <ContactForm />

        <Filter />

        <ContactList />
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
  isError: contactsSelectors.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
