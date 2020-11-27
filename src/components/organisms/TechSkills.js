import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import List from 'components/molecules/List';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechSkills = ({ title, data, sectionId }) => (
  <section id={sectionId}>
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

TechSkills.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TechSkills;
