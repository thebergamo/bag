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
                <Number name="strength" kind="balls" min={1} max={5} />
                <Number name="dexterity" kind="balls" min={1} max={5} />
                <Number name="stamina" kind="balls" min={1} max={5} />
            </Section>
            <Section title="Social">
                <Number name="charisma" kind="balls" min={1} max={5} />
                <Number name="manipulation" kind="balls" min={1} max={5} />
                <Number name="appearance" kind="balls" min={1} max={5} />
            </Section>
            <Section title="Mental">
                <Number name="perception" kind="balls" min={1} max={5} />
                <Number name="intelligence" kind="balls" min={1} max={5} />
                <Number name="wits" kind="balls" min={1} max={5} />
            </Section>
        </Section>
    </Section>
  </div>
);

export default Sheet;
