import React from 'react';
import PropTypes from 'prop-types';

import './Sheet.css';

import Section from './Section';
import Text from './Text';
import Picker from './Picker';
import Number from './Number';

import { archetypes, clans } from '../resources/vtm';

const Sheet = ({ title }) => (
  <div className="Sheet">
    <Section title={title}>
        <Section title="Basic Info" className="Section__BasicInfo">
            <Text name="name" />
            <Text name="player" />
            <Text name="chronicle" />
            <Picker name="nature" values={archetypes} />
            <Picker name="demeanor" values={archetypes}  />
            <Picker name="clan" values={clans}  />
            <Number name="generation" min={3} max={14} />
            <Text name="haven" />
            <Text name="concept" />
        </Section>
        <Section title="Attributes" className="Section__Column3">
            <Section title="Physical">
                <Text name="strength" />
                <Text name="dexterity" />
                <Text name="stamina" />
            </Section>
            <Section title="Social">
                <Text name="charisma" />
                <Text name="manipulation" />
                <Text name="appearance" />
            </Section>
            <Section title="Mental">
                <Text name="perception" />
                <Text name="intelligence" />
                <Text name="wits" />
            </Section>
        </Section>
    </Section>
  </div>
);

export default Sheet;