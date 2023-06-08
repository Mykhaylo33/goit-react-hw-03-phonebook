import React, { Component } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const { contacts } = localStorage;

    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

  if (prevState.contacts !== contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  }

  addUser = newItem => {
    const decisionForAdd = this.isIncludingName(
      newItem.name,
      this.state.contacts
    );

    if (decisionForAdd) {
      alert(`${decisionForAdd.name} is already in contacts!`);
      return;
    }

    this.setState(prev => {
      return { contacts: [...prev.contacts, newItem] };
    });
  };

  filterByName = () => {
    const { filter, contacts } = this.state;
    const lowName = filter.toLowerCase();
    return contacts.filter(item => item.name.toLowerCase().includes(lowName));
  };

  isIncludingName = (name, array) => {
    const lowName = name.toLowerCase();
    return array.find(({ name }) => name.toLowerCase() === lowName);
  };

  inputHandler = e => {
    this.setState({ filter: e.target.value });
  };

  deleteHandler = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1 className={css.title}>Phonebook</h1>
        <Form addUser={this.addUser}></Form>
        <h2 className={css.title}>Contacts</h2>
        <Filter
          inputHandler={this.inputHandler}
          inputValue={this.state.filter}
        />
        <Contacts
          contactList={this.filterByName()}
          deleteContact={this.deleteHandler}
        />
      </div>
    );
  }
}
