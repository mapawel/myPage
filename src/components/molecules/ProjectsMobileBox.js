import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProjectBox from 'components/molecules/ProjectBox';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// import PropTypes from 'prop-types';

const StyledMobileBox = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
`;

const ProjectsMobileBox = ({ isDesktop, data, mobile }) => {
  const projectsMobileRef = useRef(null);
  useEffect(() => {
    if (data && !isDesktop) {
      setTimeout(() => {
        const projects = gsap.utils.toArray(projectsMobileRef.current.children);
        projects.forEach((project) => {
          gsap.fromTo(project,
            { opacity: 0 },
            {
              opacity: 1,
              stagger: 0.2,
              duration: 0.4,
              scrollTrigger:
              {
                trigger: project,
                start: 'top 50%',
              },
            });
        });
      }, 100);
    }
  }, [data, isDesktop]);
  return (
    <StyledMobileBox
      ref={projectsMobileRef}
      isDesktop={isDesktop}
    >
      {data && data.map(({
        id, title, images, description, code, live,
      }) => (
          <ProjectBox key={id} title={title} images={images} description={description} code={code} live={live} mobile={mobile} />
        ))}
    </StyledMobileBox>
  );
};

// ProjectsMobileBox.propTypes = {

// };

export default ProjectsMobileBox;
