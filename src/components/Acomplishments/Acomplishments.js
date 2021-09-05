import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text1: '6 stars', text: 'on HackerRank in problem Solving skills.'},
  { text1: '168', text: 'All India Rank on HackerRank-Hackfest-2020.', },
  { text1: '5th', text: 'Institute Rank on GeeksforGeeks', },
  { text1: '1st', text: 'in Junior National Science Congress 2016.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text1}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
