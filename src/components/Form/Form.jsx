import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addUser } = this.props;
    const { name, number } = this.state;
    const modelId = nanoid();
    addUser({ id: modelId, name, number });
    this.setState({ name: '', number: '' });
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.formParagraph}>Name:</p>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.formLabel}>
          <p className={css.formParagraph}>Number:</p>
          <input
            type="tel"
            name="number"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
