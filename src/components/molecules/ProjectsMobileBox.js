import React from 'react';
import styled from 'styled-components';
import ProjectBox from 'components/molecules/ProjectBox';

// import PropTypes from 'prop-types';

const StyledMobileBox = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
`;

const ProjectsMobileBox = ({ isDesktop, data, mobile }) => (
  <StyledMobileBox
    isDesktop={isDesktop}
  >
    {data && data.map(({ id, title, images, description, code, live }) => (
      <ProjectBox key={id} title={title} images={images} description={description} code={code} live={live} mobile={mobile} />
    ))}
  </StyledMobileBox>
);

// ProjectsMobileBox.propTypes = {

// };

export default ProjectsMobileBox;
