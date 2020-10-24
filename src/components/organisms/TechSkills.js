import React from 'react';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import List from 'components/molecules/List';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const techSkillsList = [
  {
    title: 'My Tech Stack',
    content: ['React', 'Redux', 'JavaScript', 'CSS', 'HTML5', 'SASS', 'Firebase', 'Git', 'ESLint', 'Node.js'],
  },
  {
    title: 'with use',
    content: ['React Router', 'Material UI', 'Bulma', 'Bootstrap', 'Formik', 'Styled Components', 'GSAP', 'StoryBook', 'MomentJs', 'Toastify', 'and others...'],
  },
];

const TechSkills = () => (
  <section>
    <Wrapper>
      <SectionHeading>
        {'<tech skills />'}
      </SectionHeading>
      {techSkillsList.map((list, index) => (
        <List key={index} nr={index} title={list.title} content={list.content} />
      ))}
    </Wrapper>
  </section>
);

// TechSkills.propTypes = {

// };

export default TechSkills;
