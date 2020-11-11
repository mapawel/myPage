import React from 'react';
import RootTemplate from 'templates/RootTemplate';
import Header from 'components/organisms/Header';
import TechSkills from 'components/organisms/TechSkills';
import PersonalInfo from 'components/organisms/PersonalInfo';
import RecentProjects from 'components/organisms/RecentProjects';
import Contact from 'components/organisms/Contact';
import Footer from 'components/organisms/Footer';
import CmsProvider from 'Providers/CmsProvider';

const Root = () => (
  <RootTemplate>
    <CmsProvider
      render={
        ({
          header, sectiontitles, techSkills, personalBoxes, personalIcons, projects, contactForm, contactIcons,
        }) => (
          <>
            <Header data={header} />
            <TechSkills title={sectiontitles && sectiontitles[0]} data={techSkills} />
            <PersonalInfo title={sectiontitles && sectiontitles[1]} dataBoxes={personalBoxes} dataIcons={personalIcons} />
            <RecentProjects title={sectiontitles && sectiontitles[2]} data={projects} />
            <Contact title={sectiontitles && sectiontitles[3]} data={contactForm} icons={contactIcons} />
            <Footer />
          </>
        )
      }
    />
  </RootTemplate>
);

export default Root;
