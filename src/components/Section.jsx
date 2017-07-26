import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const SectionWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column' };
    align-items: baseline;

    > span {
        width: 100%;
    }
`;

const renderChildren = (children, row) => (
    <SectionWrapper row={row}>
        {children}
    </SectionWrapper>
)

const Section = ({ row, title, children }) => (
  <SectionWrapper>
    {title && <Header title={title} />}
    {children && renderChildren(children, row)} 
  </SectionWrapper>
);

export default Section;
