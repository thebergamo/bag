import React from 'react';

const renderOptions = (name, options) => 
    options.map((option) => (
        <div key={option}>
            <label htmlFor={option}>{option}</label>
            <input id={option} name={name} type="checkbox" />
        </div>      
    ));

const FixedOptions = ({ name, options }) => (
    <div className="FixedOptions">
        {renderOptions(name, options)}
    </div>
);

export default FixedOptions;
