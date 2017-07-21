import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ name }) => (
  <span>
    <label for={name}>{name}:</label>
    <input id={name} type="text" />
  </span>
);

export default Text;
