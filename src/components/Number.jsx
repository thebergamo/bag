import React from 'react';

import Rating from 'react-rating';

const renderByKind = ({ kind, ...props }) => {
  switch(kind) {
    case 'balls':
      return (Balls(props));

    default:
      return (
        <input
          id={props.name}
          type="number"
          min={props.min}
          max={props.max}
        />
      );
  };
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

const Number = (props) => (
  <span>
    <label htmlFor={props.name}>{props.name}:</label>
    {renderByKind(props)}
  </span>
);

export default Number;
