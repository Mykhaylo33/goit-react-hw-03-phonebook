import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { ListItem } from 'components/ListItem/ListItem';

export class Contacts extends Component {
  render() {
    const { contactList, deleteContact } = this.props;

    return (
      <div className={css.container}>
        <ul className={css.contactList}>
          {contactList.map(({ id, name, number }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
