import React from 'react';
// import PropTypes from 'prop-types';
import RootTemplate from 'templates/RootTemplate';
import Header from 'components/organisms/Header';
import TechSkills from 'components/organisms/TechSkills';
import PersonalInfo from 'components/organisms/PersonalInfo';
import RecentProjects from 'components/organisms/RecentProjects';
import Contact from 'components/organisms/Contact';
import Footer from 'components/organisms/Footer';

const Root = () => (
  <RootTemplate>
    <Header />
    <TechSkills />
    <PersonalInfo />
    <RecentProjects />
    <Contact />
    <Footer />
  </RootTemplate>
);

// Root.propTypes = {

// };

export default Root;
