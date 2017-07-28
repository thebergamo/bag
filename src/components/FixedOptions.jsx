import React from 'react';

import styled from 'styled-components';

const FixedWrapper = styled.span`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
        margin: 0 15px 0 15px;
    }

    input[type="checkbox"] {
        width: 1em;
        height: 1em;
    }
`;

const renderOptions = (name, options) => 
    options.map((option) => (
        <span key={option}>
            <label htmlFor={option}>{option}</label>
            <input id={option} name={name} type="checkbox" />
        </span>      
    ));

const FixedOptions = ({ name, options }) => (
    <FixedWrapper>
        {renderOptions(name, options)}
    </FixedWrapper>
);

export default FixedOptions;
