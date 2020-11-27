import React from 'react';
import ProjectsDetails from 'components/organisms/ProjectsDetails';

const Projects = ({
  sectiontitles, projects,
}) => (
    <ProjectsDetails title={sectiontitles && sectiontitles[4].title} data={projects} sectionId={sectiontitles && sectiontitles[4].titleMenuId} />
);

export default Projects;
