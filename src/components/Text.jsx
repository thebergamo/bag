import React from 'react';

import { startCase } from 'lodash';

const Text = ({ name }) => (
  <span>
    {name && <label htmlFor={name}>{startCase(name)}:</label>}
    <input id={name} type="text" />
  </span>
);

export default Text;
