import React from 'react';
import { startCase } from 'lodash';

const renderOptions = (options) => 
    options.map((el) => 
        <option value={el} key={el}>{startCase(el)}</option>
    );

const Picker = ({ name, values }) => (
  <span>
    {name && <label htmlFor={name}>{startCase(name)}:</label>}
    <select id={name}>
        {renderOptions(values)}
    </select>
  </span>
);

export default Picker;
