import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ashish Kumar<br />
          <h6>B.Tech, NIT Raipur</h6>
        </SectionTitle>
        <SectionText>
        I am an IT Undergraduate from NIT Raipur with a can-do attitude and phenomenal
         time management skills. I am a software developer, an avid learner, and a competitive programming 
         enthusiast who's always looking for opportunities to leverage the dynamism of technology. 
        </SectionText>
        <Button onClick={()=>window.location="https://www.linkedin.com/in/ashish-7-kumar/"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;