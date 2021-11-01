import React, { Component } from 'react';
import s from './app.module.scss';
import { v4 } from 'uuid';

import ContactForm from '../contact-form';
import ContactList from '../contact-list';
import Filter from '../filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in the contacts`);
        return;
      }

      return {
        contacts: prevState.contacts.concat({
          name,
          number,
          id: v4(),
        }),
      };
    });
  };

  getFilteredContacts = (contacts, filter) => {
    const filterNormaziled = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      const nameNormalized = name.toLowerCase();
      return nameNormalized.includes(filterNormaziled);
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts(contacts, filter);

    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
