import React from 'react';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import List from 'components/molecules/List';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const TechSkills = ({ title, data }) => (
  <section>
    <Wrapper>
      <SectionHeading>
        {title}
      </SectionHeading>
      {data && data.map((list, index) => (
        <List key={list.id} nr={index} title={list.title} content={list.lists} />
      ))}
    </Wrapper>
  </section>
);

// TechSkills.propTypes = {

// };

export default TechSkills;
