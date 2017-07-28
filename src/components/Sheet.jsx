import React from 'react';
import styled from 'styled-components';

import Section, { SectionContainer } from './Section';
import Text from './Text';
import Picker from './Picker';
import Number from './Number';
import Mix, { MixContainer } from './Mix';
import FixedOptions from './FixedOptions';

import { archetypes, clans, disciplines, backgrounds, healthLevels } from '../resources/vtm';

const SheetWrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin: 20px;

    label {
        font-size: 1.5em;
        text-transform: capitalize;
        padding: 5px;
        margin-right: 10px;
    }

    input,
    select {
        border: none;
        border-bottom: solid 1px #c9c9c9;
        transition: border 0.3s;
        font-size: 1.5em;
        text-align: center;
        max-width: 250px;
    }

    input:focus,
    input.focus,
    select:focus,
    select.focus {
        outline: none;
    }
`;

const Sheet = ({ title }) => (
  <SheetWrapper>
    <Section title={title}>
        <Section row>
            <Section>
                <Text name="name" />
                <Text name="player" />
                <Text name="chronicle" />
            </Section>
            <Section>
                <Picker name="nature" values={archetypes} />
                <Picker name="demeanor" values={archetypes}  />
                <Picker name="clan" values={clans}  />
            </Section>
            <Section>
                <Number name="generation" min={3} max={14} />
                <Text name="haven" />
                <Text name="concept" />
            </Section>
        </Section>
        <Section title="Attributes">
            <Section row>
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
        <Section title="Abilities">
            <Section row>
                <Section title="Talents">
                    <Number name="acting" kind="balls" min={1} max={5} />
                    <Number name="alertness" kind="balls" min={1} max={5} />
                    <Number name="athletics" kind="balls" min={1} max={5} />
                    <Number name="brawl" kind="balls" min={1} max={5} />
                    <Number name="dodge" kind="balls" min={1} max={5} />
                    <Number name="empathy" kind="balls" min={1} max={5} />
                    <Number name="intimidation" kind="balls" min={1} max={5} />
                    <Number name="larceny" kind="balls" min={1} max={5} />
                    <Number name="leaderchip" kind="balls" min={1} max={5} />
                    <Number name="subterfuge" kind="balls" min={1} max={5} />
                </Section>
                <Section title="Skills">
                    <Number name="animal_ken" kind="balls" min={1} max={5} />
                    <Number name="archery" kind="balls" min={1} max={5} />
                    <Number name="crafts" kind="balls" min={1} max={5} />
                    <Number name="etiquette" kind="balls" min={1} max={5} />
                    <Number name="herbalism" kind="balls" min={1} max={5} />
                    <Number name="melee" kind="balls" min={1} max={5} />
                    <Number name="music" kind="balls" min={1} max={5} />
                    <Number name="ride" kind="balls" min={1} max={5} />
                    <Number name="stealth" kind="balls" min={1} max={5} />
                    <Number name="survival" kind="balls" min={1} max={5} />
                </Section>
                <Section title="Knowledges">
                    <Number name="academics" kind="balls" min={1} max={5} />
                    <Number name="hearth_wisdom" kind="balls" min={1} max={5} />
                    <Number name="investigation" kind="balls" min={1} max={5} />
                    <Number name="law" kind="balls" min={1} max={5} />
                    <Number name="linguistics" kind="balls" min={1} max={5} />
                    <Number name="medicine" kind="balls" min={1} max={5} />
                    <Number name="occult" kind="balls" min={1} max={5} />
                    <Number name="politics" kind="balls" min={1} max={5} />
                    <Number name="science" kind="balls" min={1} max={5} />
                    <Number name="seneschal" kind="balls" min={1} max={5} />
                </Section>
            </Section>
        </Section>
        <Section title="Advantages">
            <Section row>
                <Section title="Disciplines" className="Section__Disciplines">
                    <Mix multi={true}>
                        <MixContainer>
                            <Picker values={disciplines} />
                            <Number kind="balls" min={0} max={5} />
                        </MixContainer>
                    </Mix>
                </Section>
                <Section title="Background">
                    <Mix multi={true}>
                        <MixContainer>
                            <Picker values={backgrounds} />
                            <Number kind="balls" min={0} max={5} />
                        </MixContainer>
                    </Mix>
                </Section>
                <Section title="Virtues">
                    <Number name="conscience__conviction" kind="balls" min={1} max={5} />
                    <Number name="self_control__instinct" kind="balls" min={1} max={5} />
                    <Number name="courage" kind="balls" min={1} max={5} />
                </Section>
            </Section>
        </Section>
        <Section row>
            <Section title="Merits and Flaws">
                <Mix multi={true}>
                    <MixContainer>
                        <Picker values={disciplines} />
                    </MixContainer>
                </Mix>
            </Section>
            <Section>
                <Mix name="Humanity or Path">
                    <MixContainer stack>
                        <Text />
                        <Number kind="balls" min={0} max={10} />
                    </MixContainer>
                </Mix>
                <Mix name="Willpower">
                    <MixContainer stack>
                        <Number kind="balls" min={0} max={10} />
                        <Number kind="squares" min={0} max={10} />
                    </MixContainer>
                </Mix>
                <Mix name="Blood Pool">
                    <MixContainer>
                        <Number kind="squares" min={0} max={20} />
                    </MixContainer>
                </Mix>
                
            </Section>
            <Section>
                <Mix name="Health">
                    <FixedOptions name="health" options={healthLevels} />
                </Mix>
            </Section>
        </Section>
    </Section>
  </SheetWrapper>
);

export default Sheet;
