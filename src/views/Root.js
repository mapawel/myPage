import React from 'react';
// import PropTypes from 'prop-types';
import RootTemplate from 'templates/RootTemplate';
import Header from 'components/organisms/Header';
import TechSkills from 'components/organisms/TechSkills';
import PersonalInfo from 'components/organisms/PersonalInfo';
import RecentProjects from 'components/organisms/RecentProjects';

const Root = () => (
  <RootTemplate>
    <Header />
    <TechSkills />
    <PersonalInfo />
    <RecentProjects />
  </RootTemplate>
);

// Root.propTypes = {

// };

export default Root;
