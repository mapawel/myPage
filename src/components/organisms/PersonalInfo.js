import React from 'react';
import Wrapper from 'templates/Wrapper';
import styled from 'styled-components';
import SectionHeading from 'components/atoms/SectionHeading';
import TextBox from 'components/molecules/TextBox';
// import PropTypes from 'prop-types';

const personalInfoList = [
  {
    title: 'characteristic',
    content: ['Assertive, determined, strict mind, perfectionist. Avoiding conflict, seeking solutions.', 'Looking for improvement, high committed, strongly motivated to learn a lot to front- end development and back - end basics.', 'Ready to give 100 % of power to work as a front - end / full - stack developer.'],
  },
  {
    title: 'experience',
    content: ['10 years of experience in cooperating with business customers and vandors.', 'Professional experience in project management including some web developing projects.', '15 years of experience in runing developing projects in business.'],
  },
];

const PersonalInfo = () => (
  <section>
    <Wrapper>
      <SectionHeading>
        {'<personal info />'}
      </SectionHeading>
      <TextBox data={personalInfoList[0]} rect />
    </Wrapper>
  </section>
);

// PersonalInfo.propTypes = {

// };

export default PersonalInfo;
