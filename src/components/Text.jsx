import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ name }) => (
  <span>
    <label htmlFor={name}>{name}:</label>
    <input id={name} type="text" />
  </span>
);

export default Text;
