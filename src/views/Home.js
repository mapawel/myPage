/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header';
import TechSkills from 'components/organisms/TechSkills';
import PersonalInfo from 'components/organisms/PersonalInfo';
import RecentProjectsCube from 'components/organisms/RecentProjectsCube';
import Contact from 'components/organisms/Contact';
import Footer from 'components/organisms/Footer';

const Home = ({
  header, sectiontitles, techSkills, personalBoxes, personalIcons, projects, contactForm, contactIcons,
}) => (
  <>
    <Header
      data={header}
      sectionId={sectiontitles && sectiontitles[3].titleMenuId}
    />
    <RecentProjectsCube
      title={sectiontitles && sectiontitles[0].title}
      sectionId={sectiontitles && sectiontitles[0].titleMenuId}
      data={projects}
    />
    <TechSkills
      title={sectiontitles && sectiontitles[1].title}
      sectionId={sectiontitles && sectiontitles[1].titleMenuId}
      data={techSkills}
    />
    <PersonalInfo
      title={sectiontitles && sectiontitles[2].title}
      sectionId={sectiontitles && sectiontitles[2].titleMenuId}
      dataBoxes={personalBoxes}
      dataIcons={personalIcons}
    />
    <Contact
      title={sectiontitles && sectiontitles[3].title}
      sectionId={sectiontitles && sectiontitles[3].titleMenuId}
      data={contactForm}
      icons={contactIcons}
    />
    <Footer />
  </>
);

Home.propTypes = {
  header: PropTypes.object.isRequired,
  sectiontitles: PropTypes.arrayOf(PropTypes.object).isRequired,
  techSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
  personalBoxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  personalIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  contactForm: PropTypes.object.isRequired,
  contactIcons: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default Home;
