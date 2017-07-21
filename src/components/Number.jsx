import React from 'react';
import PropTypes from 'prop-types';

const Number = ({ name, min, max }) => (
  <span>
    <label for={name}>{name}:</label>
    <input
        id={name}
        type="number"
        min={min}
        max={max}
    />
  </span>
);

export default Number;
