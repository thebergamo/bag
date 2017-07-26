import React from 'react';

import { startCase } from 'lodash';
import Rating from 'react-rating';

const renderByKind = ({ kind, ...props }) => {
  switch(kind) {
    case 'balls':
      return (Balls(props));
    case 'squares':
      return (Squares(props));
    default:
      return (
        <input
          id={props.name}
          type="number"
          min={props.min}
          max={props.max}
        />
      );
  }
};

const Balls = ({ min, max }) => (
  <Rating
    start={0}
    stop={max}
    initialRate={min}
    empty="fa fa-circle-thin fa-lg fa-pull-right"
    full="fa fa-circle fa-lg fa-pull-right"
  />
);

const Squares = ({ min, max }) => (
  <Rating
    start={0}
    stop={max}
    initialRate={min}
    empty="fa fa-square-o fa-lg fa-pull-right"
    full="fa fa-square fa-lg fa-pull-right"
  />
);

const Number = (props) => (
  <span>
    {props.name && <label htmlFor={props.name}>{startCase(props.name)}:</label>}
    {renderByKind(props)}
  </span>
);

export default Number;
