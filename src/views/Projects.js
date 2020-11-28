import React from 'react';
import PropTypes from 'prop-types';
import ProjectsDetails from 'components/organisms/ProjectsDetails';

const Projects = ({ sectiontitles, projects }) => (
  <ProjectsDetails title={sectiontitles && sectiontitles[4].title} data={projects} sectionId={sectiontitles && sectiontitles[4].titleMenuId} />
);

Projects.propTypes = {
  sectiontitles: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
