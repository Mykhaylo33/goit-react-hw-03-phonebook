import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ListItem.module.css';

export class ListItem extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <li className={css.listItem}>
        {name}: {number}
        <button
          onClick={() => deleteContact(id)}
          className={css.button}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  }
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
