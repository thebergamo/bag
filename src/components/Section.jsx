import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const SectionWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column' };
    align-items: center;
    margin-bottom: 10px;

    > span {
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: baseline;

        > label {
            min-width: 260px;
            text-align: end;
            margin-left: -45px;
        }
    }
`;

const Section = ({ row, title, children }) => (
  <SectionWrapper row={row}>
    {title && <Header title={title} />}
    {children} 
  </SectionWrapper>
);

export default Section;
