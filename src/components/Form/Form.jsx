import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const { addUser } = this.props;
    const { name, number } = this.state;
    const modelId = nanoid();
    addUser({ id: modelId, name, number });
    this.setState({ name: '', number: '' });
  };

  handlerChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handlerChangeNumber = (e) => {
    const { value } = e.currentTarget;
    this.setState({ number: value });
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
            required
            value={name}
            onChange={this.handlerChange}
          />
        </label>
        <label className={css.formLabel}>
          <p className={css.formParagraph}>Number:</p>
          <input
            type="tel"
            name="number"
            required
            value={number}
            onChange={this.handlerChange}
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
