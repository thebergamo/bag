import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';

const renderOptions = (options) => 
    options.map((el) => 
        <option value={el}>{startCase(el)}</option>
    );

const Picker = ({ name, values }) => (
  <span>
    <label htmlFor={name}>{name}:</label>
    <select id={name}>
        {renderOptions(values)}
    </select>
  </span>
);

export default Picker;
