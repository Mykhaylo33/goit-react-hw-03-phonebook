import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { inputHandler, inputValue } = this.props;

    return (
      <label className={css.label}>
        <p className={css.paragraph}>Find contacts by name:</p>
        <input type="text" onChange={inputHandler} value={inputValue}></input>
      </label>
    );
  }
}

Filter.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
