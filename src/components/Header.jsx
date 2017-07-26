import React from 'react';
import styled from 'styled-components';

import { startCase } from 'lodash';

const HeaderWrapper = styled.header`
    align-content: center;
    width: 100%;
`

const Header = ({ title }) => (
    <HeaderWrapper>
        <h2>{startCase(title)}</h2>
    </HeaderWrapper>
);

export default Header;