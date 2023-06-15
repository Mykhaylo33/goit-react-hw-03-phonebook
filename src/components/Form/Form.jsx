import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { addUser } = this.props;
    const { name, number } = this.state;
    const modelId = nanoid();
    addUser({ id: modelId, name: name, number: number });
    this.setState({ name: '', number: '' });
  };

  handlerChangeName = e => {
    //  const { name, value } = e.currentTarget;
    this.setState({ name: e.currentTarget.value });
  };

  handlerChangeNumber = e => {
    //  const { name, value } = e.currentTarget;
    this.setState({ number: e.currentTarget.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handlerSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.formParagraph}>Name:</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handlerChangeName}
          />
        </label>
        <label className={css.formLabel}>
          <p className={css.formParagraph}>Number:</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handlerChangeNumber}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  addUser: PropTypes.func.isRequired,
};
