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
    {data.map(({ title, images, description }, index) => (
      <ProjectBox key={index} title={title} images={images} description={description} mobile={mobile} />
    ))}
  </StyledMobileBox>
);

// ProjectsMobileBox.propTypes = {

// };

export default ProjectsMobileBox;
