import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Header from './Header';

const MixWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-self: flex-start;

    > button {
        background: none;
        border: none;
    }
`;

const stackStyles = css`
    flex-direction: column;

    > *:first-child {
        padding-bottom: 15px;
    }
`;

const MixContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10px;
    width: '100%';
    /*${props => props.fixedWidth && props.fixedWidth }*/

    ${props => props.stack && stackStyles}

    > button {
        background: none;
        border: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

class Mix extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputs: [props.children]
        };

        this.onAddMoreBtnClick = this.onAddMoreBtnClick.bind(this);
        this.renderInContainer = this.renderInContainer.bind(this);
        this.renderAddMore = this.renderAddMore.bind(this);
    }

    onAddMoreBtnClick() {
        const { inputs } = this.state;
        const { children } = this.props;
        this.setState({
            inputs: inputs.concat(this.renderInContainer(children))
        });
    }

    renderInContainer (child) {
        const { stack, fixedWidth } = this.props;
        return (
            <MixContainer stack={stack} fixedWidth={fixedWidth}>
                {child}
            </MixContainer>
        );
    }

    renderAddMore () {
        return (
            <MixContainer>
                <button onClick={this.onAddMoreBtnClick}>+ Add more</button>
            </MixContainer>
        );
    }

    render() {
        const { name, multi } = this.props;
        return (
            <MixWrapper>
                {name && <Header title={name} />}
                {this.state.inputs}
                {multi && this.renderAddMore()}
            </MixWrapper>
        )
    }
}

export default Mix;
export { MixContainer };